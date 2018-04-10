import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";

import { AttorneysComponent } from "../attorneys/attorneys.component";

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'attorneys',
				component: AttorneysComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],
})

export class HomeRoutingModule {

}