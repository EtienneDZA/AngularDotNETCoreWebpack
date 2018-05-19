import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from "../shared/services/auth-service";

import { Credentials } from "./credentials.interface";

@Component({
    moduleId: module.id,
	templateUrl: 'login.component.html',
	styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {

	constructor(private authService: AuthenticationService, private router: Router) {

	}

	loginModel: Credentials = { userName: "", password: "" };

    ngOnInit() {
	}

	public login() {
		this.authService
			.login(this.loginModel.userName, this.loginModel.password)
			.subscribe(result => {
				if (result) {
					this.router.navigate(["/home"]);
				}
			},
			error => {
				console.log(error);
			});	
	}
}
