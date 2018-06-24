import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/delay';

export class Attorney {
	constructor(id: number, name: string) {
		this.ID = id;
		this.Name = name;
	}

	ID: number;
	Name: string;
	Kref: string;
	LUN: string;
	DebtorCode: string;
	Branch: string;
}

const ATTORNEYS = [
	new Attorney(1, "Piet"),
	new Attorney(2, "Jan"),
	new Attorney(3, "Gert"),
	new Attorney(4, "Koos"),
]


@Injectable()
export class AttorneyService {


	getAttorneys(): Observable<Attorney[]> {
		return Observable
			.of(ATTORNEYS)
			//.delay(1000)
			;
	}
	

}