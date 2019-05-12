import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DewComponent } from './dew.component';
import { DewRoutingModule } from './dew-routing.module';

@NgModule({
    imports: [CommonModule, DewRoutingModule, RouterModule],
    declarations: [DewComponent]
})
export class DewModule { }