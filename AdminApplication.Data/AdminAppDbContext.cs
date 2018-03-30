using AdminApplication.Data.Models;
using AdminApplication.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdminApplication.Data
{
	public class AdminAppDbContext : IdentityDbContext<ApplicationUser>
	{
		public AdminAppDbContext(DbContextOptions options) 
			: base(options)
		{

		}

		public DbSet<Attorney> Attorneys { get; set; }
	}
}
