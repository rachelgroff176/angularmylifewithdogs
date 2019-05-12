import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EinComponent } from './ein.component';
import { EinRoutingModule } from './ein-routing.module';

@NgModule({
    imports: [CommonModule, EinRoutingModule, RouterModule],
    declarations: [EinComponent]
})
export class EinModule { }