import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DewComponent } from './dew.component';

const routes: Routes = [
    { path: 'dew', component: DewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DewRoutingModule {

}