import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AttorneysComponent } from './attorneys.component';
import { AttorneyListComponent } from './attorney-list.component';
import { AttorneyDetailComponent } from './attorney-detail.component';

export const routes: Routes = [
	{
		path: '',
		component: AttorneysComponent,
		children: [
			{
				path: '',
				component: AttorneyListComponent,
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
	declarations: [],
	providers: []
})

export class AttorneysRoutingModule {

}