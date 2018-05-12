import { Subscription } from "rxjs";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http"
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Router } from "@angular/router";
import "rxjs/Rx";

@Injectable()
export class AuthenticationService {

	constructor(private http: HttpClient, private router: Router) {
	}

	redirectUrl: string;

	public login(username: string, password: string) {
		this.http
			.post<IAuthenticationResponse>("api/users/login", { username: username, password: password })
			.map((result, index) => {
				localStorage.setItem("auth_token", result.auth_token);
				return true;
			})
			.catch(error => error)
			.subscribe(result => {
				if (result) {
					this.router.navigate(["/home"]);
				}
			});
	}

	public isLoggedIn(): boolean {
		console.log(localStorage.getItem("auth_token"));
		return !!localStorage.getItem("auth_token");
	}

	public logout() {
		localStorage.removeItem("auth_token");
		this.router.navigate(["/home"]);
	}
}

export interface IAuthenticationResponse {
	id: string;
	auth_token: string;
}