import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from "../shared/services/auth-service";

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

	constructor(private authService: AuthService) {

	}

	loginModel: any = {};
	userName: string;
	password: string;

    ngOnInit() {
	}

	public login() {
		console.log(this.loginModel);
		this.authService.login();
	}
}
