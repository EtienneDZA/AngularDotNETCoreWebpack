import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';

import { slideInDownAnimation } from "../animations";
import { Attorney } from './attorney.service';

@Component({
	selector: "attorneyDetail",
	templateUrl: "./attorney-detail.component.html",
	//animations: [slideInDownAnimation],
})

export class AttorneyDetailComponent {
	//@HostBinding('@routeAnimation') routeAnimation = true;
	//@HostBinding('style.display') display = 'block';
	//@HostBinding('style.position') position = 'absolute';

	@Input()
	public attorney: Attorney;

}