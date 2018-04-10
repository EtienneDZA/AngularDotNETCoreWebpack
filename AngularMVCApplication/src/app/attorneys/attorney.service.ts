import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/delay';

export class Attorney {
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	id: number;
	name: string;
}

const ATTORNEYS = [
	new Attorney(1, "Piet"),
	new Attorney(2, "Jan"),
	new Attorney(3, "Gert"),
	new Attorney(4, "Koos"),
]


@Injectable()
export class AttorneyService {


	// delay this
	getAttorneys() {
		return Observable.of(ATTORNEYS);
	}
	

}