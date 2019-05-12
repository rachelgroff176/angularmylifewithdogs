import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DewModule } from './dew/dew.module';
import { EinModule} from './ein/ein.module';
import { AboutMeModule } from './aboutme/aboutme.module';
import { TeddyBearsModule } from './teddybears/teddybears.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DewModule, EinModule, AboutMeModule, TeddyBearsModule, HomeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
