import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NavMenuComponent } from '../navmenu/navmenu.component';

@NgModule({
	imports: [HomeRoutingModule],
	declarations: [
		HomeComponent,
		NavMenuComponent
	],
})

export class HomeModule {

}