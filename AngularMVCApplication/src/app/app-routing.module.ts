import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AttorneyListComponent } from './attorneys/attorney-list.component';
import { LoginComponent } from './login/login.component';

import { AttorneysModule } from './attorneys/attorneys.module';

import { AuthGuard } from "./auth-guard.service";

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'attorneys',
				loadChildren: './attorneys/attorneys.module#AttorneysModule',
				//component: AttorneyListComponent,
			},
		]
	},
	{ path: '**', redirectTo: '' }

	// try child routes, https://stackoverflow.com/questions/40991269/angular2-login-and-subsequent-routing?rq=1
	// https://angular-2-training-book.rangle.io/handout/modules/lazy-loading-module.html
	// https://stackoverflow.com/questions/40110827/angular2-router-how-to-correctly-load-children-modules-with-their-own-routing-r

///	https://stackoverflow.com/questions/38644105/routing-issues-after-login
	
];

@NgModule({
	imports: [RouterModule.forRoot(
		routes,
		{ enableTracing: true }
	)],
	exports: [RouterModule],
	providers: [AuthGuard]
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