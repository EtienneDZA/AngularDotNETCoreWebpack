import { Component } from "@angular/core";

import { AuthenticationService } from "../shared/services/auth-service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ['./header.component.scss']
})

export class AppHeaderComponent {

	constructor(private authService: AuthenticationService) {

	}

	public logout(): void {
		this.authService.logout();
	}

}