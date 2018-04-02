import { Subscription } from "rxjs";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http"
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthService {

	constructor(private http: HttpClient) {

	}

	public login() {
		var observable = this.http.post("api/users/login", { username: "admin@korbitec.com", password: "P@ssw0rd" });
		observable
		//	.switchMap((event) => event.)
			.subscribe();
		this.loggedIn = true;
	}

	private loggedIn: boolean;
	public isLoggedIn(): boolean {
		return this.loggedIn;
	}

}