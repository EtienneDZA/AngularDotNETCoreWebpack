import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";

import { AppRoutingModule } from "./app-routing.module";

import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './navmenu/navmenu.component';

import { AuthenticationService } from "./shared/services/auth-service"

import { AttorneysModule } from './attorneys/attorneys.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		AttorneysModule,
		AppRoutingModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		NavMenuComponent,
		LoginComponent
	],
	bootstrap: [AppComponent],
	providers: [AuthenticationService]
})
export class AppModule {

}