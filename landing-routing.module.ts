import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShareSheet} from './landing.component'

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '',
    component: ShareSheet,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }



