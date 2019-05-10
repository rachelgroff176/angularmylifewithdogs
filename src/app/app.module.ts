import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DewComponent } from './dew/dew.component';
import { EinComponent } from './ein/ein.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TeddyBearsComponent } from './teddy-bears/teddy-bears.component';

@NgModule({
  declarations: [ AppComponent, DewComponent, EinComponent, AboutMeComponent, TeddyBearsComponent ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
