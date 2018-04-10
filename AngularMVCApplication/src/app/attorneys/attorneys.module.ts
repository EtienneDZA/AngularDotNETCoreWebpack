import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AttorneysRoutingModule } from "./attorneys.routing.module";

import { AttorneysComponent } from "./attorneys.component";
import { AttorneyListComponent } from "./attorney-list.component";
import { AttorneyDetailComponent } from "./attorney-detail.component";

import { AttorneyService } from "./attorney.service";

@NgModule({
	imports: [
		FormsModule,
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