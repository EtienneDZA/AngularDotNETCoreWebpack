import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./auth-guard.service";

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
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