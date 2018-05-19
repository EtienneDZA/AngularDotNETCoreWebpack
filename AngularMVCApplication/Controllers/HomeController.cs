using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AngularMVCApplication.Controllers
{
	//[Authorize]
	//[Route("[controller]")]
	// Is basies net die controller wat die app host
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		[AllowAnonymous]
		[HttpPost("authenticate")]
		public IActionResult Authenticate()
		{

			return Ok();
		}
	}
}
