import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AttorneysComponent } from "./attorneys.component";
import { AttorneyListComponent } from "./attorney-list.component";
import { AttorneyDetailComponent } from "./attorney-detail.component";

import { AuthGuard } from "../auth-guard.service";

import { AttorneyResolver } from "./attorneys-list-resolver.service";

export const routes: Routes = [
	{
		path: '',
		component: AttorneysComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: AttorneyListComponent,
				resolve: {
					attorneys: AttorneyResolver
				},
				children: [
					{
						path: 'attorney/:id',
						component: AttorneyDetailComponent
					}
				]
				
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],
	providers: [AuthGuard, AttorneyResolver]
})

export class AttorneysRoutingModule {

}