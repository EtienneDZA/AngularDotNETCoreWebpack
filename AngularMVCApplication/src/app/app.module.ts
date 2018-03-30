import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AdminComponent } from "./admin/admin.component";
import { NavMenuComponent } from './navmenu/navmenu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		AdminComponent,
		NavMenuComponent,
		LoginComponent
	],
	bootstrap: [AppComponent],
	providers: [
	]
})
export class AppModule {

}