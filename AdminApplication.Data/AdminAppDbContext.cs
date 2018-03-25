using AdminApplication.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdminApplication
{
	public class AdminAppDbContext : IdentityDbContext<ApplicationUser>
	{
		public AdminAppDbContext(DbContextOptions options) : base(options)
		{

		}
	}
}
