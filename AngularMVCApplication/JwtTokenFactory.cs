using Microsoft.Extensions.Options;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;

namespace AngularMVCApplication
{
	public class JwtTokenFactory : IJwtTokenFactory
	{
		private readonly JwtIssuerOptions _jwtOptions;

		public JwtTokenFactory(IOptions<JwtIssuerOptions> jwtOptions)
		{
			_jwtOptions = jwtOptions.Value;
		}

		public string GenerateEncodedToken(string userName, ClaimsIdentity identity)
		{
			var claims = new[]
			{
				 new Claim(JwtRegisteredClaimNames.Sub, userName),
				 new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
				 //new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(_jwtOptions.IssuedAt).ToString(), ClaimValueTypes.Integer64),
				 new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString(), ClaimValueTypes.Integer64),
				 identity.FindFirst("rol"),
				 identity.FindFirst("id")
			 };

			// Create the JWT security token and encode it.
			var jwt = new JwtSecurityToken(
				issuer: _jwtOptions.Issuer,
				audience: _jwtOptions.Audience,
				claims: claims,
				notBefore: DateTime.UtcNow,
				expires: DateTime.Now.Add(TimeSpan.FromSeconds(3)),
				signingCredentials: _jwtOptions.SigningCredentials);

			var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

			return encodedJwt;
		}

		public ClaimsIdentity GenerateClaimsIdentity(string userName, string id)
		{
			return new ClaimsIdentity(new GenericIdentity(userName, "Token"), new[]
			{
				new Claim("id", id),
				new Claim("rol", "api_access")
			});
		}
	}
}

