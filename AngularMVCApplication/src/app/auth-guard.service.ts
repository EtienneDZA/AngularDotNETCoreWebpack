import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from "./shared/services/auth-service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

	constructor(private authService: AuthenticationService, private router: Router) { }



	// CHECK FOR TOKEN EXPIRY
	// APPEND TOKEN TO HEADERS BEFORE MAKING SERVER CALL. INTERCEPTOR?

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.checkLogin(state.url);
	}

	canLoad(route: Route): boolean {
		let url = `/${route.path}`;
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.authService.isLoggedIn())
			return true;

		this.authService.redirectUrl = url;

		this.router.navigate(["/login"]);
		return false;
	}
}