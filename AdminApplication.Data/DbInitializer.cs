using AdminApplication.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;

namespace AdminApplication.Data
{
	public class DbInitializer
	{
		public async static Task Seed(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
		{
			PasswordHasher<ApplicationUser> hasher = new PasswordHasher<ApplicationUser>();
			var userName = "admin@korbitec.com";
			var user = new ApplicationUser
			{
				FirstName = "Admin",
				UserName = userName,
				Email = "et@test.com",
				AccessFailedCount = 0,
				EmailConfirmed = true,
				LockoutEnabled = false,
				PhoneNumberConfirmed = true,
				TwoFactorEnabled = false,
				SecurityStamp = Guid.NewGuid().ToString()
			};
			user.PasswordHash = hasher.HashPassword(user, "P@ssw0rd");

			if (await roleManager.FindByNameAsync("Administrator") == null)
				await roleManager.CreateAsync(new IdentityRole("Administrator"));

			if (await userManager.FindByNameAsync(userName) == null)
			{
				await userManager.CreateAsync(user);
				await userManager.AddToRoleAsync(user, "Administrator");
			}
			//test
		}
	}
}
