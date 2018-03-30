using AdminApplication.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularMVCApplication.Controllers
{
	[Authorize]
    public class UsersController : Controller
    {

		public UsersController()
		{
		}

		public IActionResult Login()
		{
			return View();
		}
	}
}
