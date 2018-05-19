import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

import { slideInDownAnimation } from "../animations";

@Component({
	template: `
		<h2>Attorney details</h2>,
		`,
	animations: [slideInDownAnimation]
})

export class AttorneyDetailComponent {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display') display = 'block';
	@HostBinding('style.position') position = 'absolute';

}