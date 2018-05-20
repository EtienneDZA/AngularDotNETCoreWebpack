import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { AppHeaderComponent } from './header/header.component';

import { AuthenticationService } from "./shared/services/auth-service"

import { AppMaterialModule } from "./app.material.module";

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		NavMenuComponent,
		LoginComponent,
		AppHeaderComponent
	],
	bootstrap: [AppComponent],
	providers: [AuthenticationService]
})
export class AppModule { }