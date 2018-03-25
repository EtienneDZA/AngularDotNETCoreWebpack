using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
