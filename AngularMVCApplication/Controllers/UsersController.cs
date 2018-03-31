using AdminApplication.Models;
using AngularMVCApplication.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AngularMVCApplication.Controllers
{
	//[Authorize]
	[Route("api/[controller]")]
	public class UsersController : Controller
	{
		private IJwtTokenFactory _jwtFactory;
		private UserManager<ApplicationUser> _userManager;
		private readonly JwtIssuerOptions _jwtOptions;

		public UsersController(UserManager<ApplicationUser> userManager, IJwtTokenFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
		{
			_userManager = userManager;
			_jwtFactory = jwtFactory;
			_jwtOptions = jwtOptions.Value;
		}

		[HttpPost("login")]
		public async Task<IActionResult> Login([FromBody]LoginViewModel model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var identity = await GetClaimsIdentity(model.UserName, model.Password);
			if (identity == null)
			{
				//return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
			}

			var jwt = await GenerateJwt(identity, _jwtFactory, model.UserName, _jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
			return new OkObjectResult(jwt);
		}

		public static async Task<string> GenerateJwt(ClaimsIdentity identity, IJwtTokenFactory jwtFactory, string userName, JwtIssuerOptions jwtOptions, JsonSerializerSettings serializerSettings)
		{
			var response = new
			{
				id = identity.Claims.Single(c => c.Type == "id").Value,
				auth_token = await Task.FromResult(jwtFactory.GenerateEncodedToken(userName, identity)),
				//expires_in = (int)DateTime.Now.Add(TimeSpan.FromMinutes(120)).TotalSeconds
			};

			return JsonConvert.SerializeObject(response, serializerSettings);
		}

		private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
		{
			if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
			{
				return await Task.FromResult<ClaimsIdentity>(null);
			}

			var userToVerify = await _userManager.FindByNameAsync(userName);

			if (userToVerify == null) return await Task.FromResult<ClaimsIdentity>(null);

			if (await _userManager.CheckPasswordAsync(userToVerify, password))
			{
				return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
			}

			return await Task.FromResult<ClaimsIdentity>(null);
		}
	}
}
