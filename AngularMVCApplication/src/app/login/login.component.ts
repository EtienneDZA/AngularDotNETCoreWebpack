import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from "../shared/services/auth-service";

@Component({
    moduleId: module.id,
	templateUrl: 'login.component.html',
	styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {

	constructor(private authService: AuthenticationService) {

	}

	loginModel: any = {};

    ngOnInit() {
	}

	public login() {
		this.authService
			.login(this.loginModel.userName, this.loginModel.password);
	}
}
