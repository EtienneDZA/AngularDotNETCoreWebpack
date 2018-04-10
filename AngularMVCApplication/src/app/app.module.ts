import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AttorneysModule } from './attorneys/attorneys.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from "./shared/services/auth-service"

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		AttorneysModule,
		HomeModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		//HomeComponent,
		AdminComponent,
		LoginComponent
	],
	bootstrap: [AppComponent],
	providers: [AuthenticationService]
})
export class AppModule {

}