import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AttorneyService, Attorney } from "./attorney.service";

@Injectable()
export class AttorneyResolver implements Resolve<Attorney[]> {
	constructor(private attorneyService: AttorneyService, private router: Router) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Attorney[]> {
		return this.attorneyService.getAttorneys();
  }
}