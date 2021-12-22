import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageModule } from './modules/static/static.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), StaticPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
