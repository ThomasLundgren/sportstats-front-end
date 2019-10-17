import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sport } from "./model/sport.model";

import { SportComponent } from './component/sport/sport.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
   },
  { 
    path: 'sport/:id',
    component: SportComponent,
    data: Sport
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  sports: Sport[];

  constructor() {

  }

 }
