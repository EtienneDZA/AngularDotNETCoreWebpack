import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AttorneysRoutingModule } from "./attorneys.routing.module";

import { AttorneysComponent } from "./attorneys.component";
import { AttorneyListComponent } from "./attorney-list.component";
import { AttorneyDetailComponent } from "./attorney-detail.component";

import { AttorneyService } from "./attorney.service";

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		AttorneysRoutingModule,
	],
	declarations: [
		AttorneysComponent,
		AttorneyListComponent,
		AttorneyDetailComponent
	],
	providers: [AttorneyService]
})

export class AttorneysModule {

}