import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	providers: []
})

export class AppComponent implements OnInit {
	constructor() {
		console.log('AppComponent -> constructor');
	}

	ngOnInit() {
		console.log('AppComponent -> ngOnInit');
	}
}