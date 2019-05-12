import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TeddyBearsComponent } from './teddybears.component';
import { TeddyBearsRoutingModule } from './teddybears-routing.module';

@NgModule({
    imports: [CommonModule, TeddyBearsRoutingModule, RouterModule],
    declarations: [TeddyBearsComponent]
})
export class TeddyBearsModule { }