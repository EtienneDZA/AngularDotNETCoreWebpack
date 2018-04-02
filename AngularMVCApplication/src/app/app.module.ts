import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AdminComponent } from "./admin/admin.component";
import { NavMenuComponent } from './navmenu/navmenu.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from "./shared/services/auth-service"

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		AdminComponent,
		NavMenuComponent,
		LoginComponent
	],
	bootstrap: [AppComponent],
	providers: [AuthService]
})
export class AppModule {

}