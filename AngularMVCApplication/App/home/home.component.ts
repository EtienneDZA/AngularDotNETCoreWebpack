import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

	constructor() {
		console.log('HomeComponent -> constructor');

	}

	ngOnInit() {
		console.log('HomeComponent -> ngOnInit');
	}

 }