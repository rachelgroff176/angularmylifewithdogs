import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutMeComponent } from './aboutme.component';
import { AboutMeRoutingModule } from './aboutme-routing.module';

@NgModule({
    imports: [CommonModule, AboutMeRoutingModule, RouterModule],
    declarations: [AboutMeComponent]
})
export class AboutMeModule { }