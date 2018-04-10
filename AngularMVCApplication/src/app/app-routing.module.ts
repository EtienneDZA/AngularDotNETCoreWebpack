import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./auth-guard.service";

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	//{ path: '', loadChildren: "./home/home.module" },

	// try child routes, https://stackoverflow.com/questions/40991269/angular2-login-and-subsequent-routing?rq=1
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'admin', component: AdminComponent },
	{ path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(
		routes,
		{ enableTracing: true }
	)],
	providers: [AuthGuard],
	exports: [RouterModule]
})

export class AppRoutingModule { }

//export const routes: RouterConfig = [
//	{ path: '', component: LoginComponent }, <- always redirect to login
//      {
//		path: 'home', component: Home,
//		children: [
//			{ path: 'about', component: About },
//			{ path: 'hall', component: HallComponent },
//			{ path: 'caterer', component: CatererComponent }
//		]
//	},
//	{ path: '**', component: LoginComponent }, <- redirect when undefined route
//];

//export const APP_ROUTER_PROVIDERS = [
//	provideRouter(routes)
//];