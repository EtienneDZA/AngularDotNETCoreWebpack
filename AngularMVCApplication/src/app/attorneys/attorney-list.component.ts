import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AttorneyService, Attorney } from './attorney.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: "./attorney-list.component.html",
	styleUrls: ["./attorney-list.component.scss"]
})

export class AttorneyListComponent {

	private attorneys: Observable<Attorney[]>
	constructor(private attorneyService: AttorneyService, route: ActivatedRoute) {
		route.data
			.subscribe((data: { attorneys: Observable<Attorney[]> }) => {
				this.attorneys = data.attorneys;
		});
	}
}		