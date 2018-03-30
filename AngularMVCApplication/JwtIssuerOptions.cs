using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularMVCApplication
{
    public class JwtIssuerOptions
    {
		public string Issuer { get; set; }

		public string Audience { get; set; }

		public SigningCredentials SigningCredentials { get; set; }
	}
}
