import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/delay';

export class Attorney {
	constructor(id: number, name: string, kref: string, lun: string, debtorCode: string, branch: string) {
		this.ID = id;
		this.Name = name;
		this.Kref = kref;
		this.LUN = lun;
		this.DebtorCode = debtorCode;
		this.Branch = branch;
	}

	ID: number;
	Name: string;
	Kref: string;
	LUN: string;
	DebtorCode: string;
	Branch: string;
}

const ATTORNEYS = [
	new Attorney(1, "Piet", "F989428B-E0A9-4851-A4E7-64095DAFCD8A", "43001", "445", "PE"),
	new Attorney(2, "Jan", "F989428B-E0A9-4851-A4E7-64095DAFCD8A", "43001", "445", "PE"),
	new Attorney(3, "Gert", "F989428B-E0A9-4851-A4E7-64095DAFCD8A", "43001", "445", "PE"),
	new Attorney(4, "Koos", "F989428B-E0A9-4851-A4E7-64095DAFCD8A", "43001", "445", "PE"),
	new Attorney(1, "Piet", "F989428B-E0A9-4851-A4E7-64095DAFCD8A", "43001", "445", "PE"),
	new Attorney(2, "Jan", "F989428B-E0A9-4851-A4E7-64095DAFCD8A", "43001", "445", "PE"),
	new Attorney(3, "Gert", "F989428B-E0A9-4851-A4E7-64095DAFCD8A", "43001", "445", "PE"),
	new Attorney(4, "Koos", "F989428B-E0A9-4851-A4E7-64095DAFCD8A", "43001", "445", "PE"),
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