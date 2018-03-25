import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AdminComponent } from "./components/admin/admin.component";
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { LoginComponent } from './components/login/login.component';

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