using System.Security.Claims;

namespace AngularMVCApplication
{
	public interface IJwtTokenFactory
	{
		string GenerateEncodedToken(string userName, ClaimsIdentity identity);
		ClaimsIdentity GenerateClaimsIdentity(string userName, string id);
	}
}
