import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AttorneysModule } from './attorneys/attorneys.module';

import { HomeComponent } from './home/home.component';
import { AttorneyListComponent } from './attorneys/attorney-list.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./auth-guard.service";

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'attorneys',
				canActivate: [AuthGuard],
				loadChildren: './attorneys/attorneys.module#AttorneysModule',
			},
		]
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(
		routes,
		{
			enableTracing: true,
			preloadingStrategy: PreloadAllModules
		}
	)],
	exports: [RouterModule],
	providers: [AuthGuard]
})

export class AppRoutingModule { }