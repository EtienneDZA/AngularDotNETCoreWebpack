import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'admin', component: AdminComponent },
	{ path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(
		routes,
		{ enableTracing: true }
	)],
	exports: [RouterModule]
})

export class AppRoutingModule { }