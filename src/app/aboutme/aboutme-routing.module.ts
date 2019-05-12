import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './aboutme.component';

const routes: Routes = [
    { path: 'aboutme', component: AboutMeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutMeRoutingModule {

}