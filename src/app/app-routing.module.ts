import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { EinComponent } from '../app/ein/ein.component';
import { DewComponent } from '../app/dew/dew.component';
import { TeddyBearsComponent } from '../app/teddybears/teddybears.component';
import { AboutMeComponent } from '../app/aboutme/aboutme.component';

const routes: Routes = [
  /*{ path: 'home', component: HomeComponent },
  { path: 'ein', component: EinComponent },
  { path: 'dew', component: DewComponent },
  { path: 'teddybears', component: TeddyBearsComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: '', pathMatch: 'prefix', redirectTo: '/home' },
  { path: '**', pathMatch: 'prefix', redirectTo: '/home' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }