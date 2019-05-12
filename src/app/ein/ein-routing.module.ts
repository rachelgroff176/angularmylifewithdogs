import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EinComponent } from './ein.component';

const routes: Routes = [
    { path: 'ein', component: EinComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EinRoutingModule {

}