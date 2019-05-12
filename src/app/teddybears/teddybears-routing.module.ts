import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeddyBearsComponent } from './teddybears.component';

const routes: Routes = [
    { path: 'teddybears', component: TeddyBearsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeddyBearsRoutingModule {

}