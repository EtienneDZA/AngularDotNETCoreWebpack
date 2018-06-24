import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
	imports: [
		MatButtonModule,
		MatExpansionModule
	],
	exports: [
		MatButtonModule,
		MatExpansionModule
	]
})
export class AppMaterialModule { }