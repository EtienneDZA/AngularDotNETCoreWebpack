import { NgModule } from "@angular/core";
import { MatButtonModule, MatPaginatorModule } from "@angular/material";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	imports: [
		MatButtonModule,
		MatExpansionModule,
		MatTableModule,
		MatPaginatorModule
	],
	exports: [
		MatButtonModule,
		MatExpansionModule,
		MatTableModule,
		MatPaginatorModule
	]
})
export class AppMaterialModule { }