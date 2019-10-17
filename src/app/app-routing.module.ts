import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportComponent } from './component/sport/sport.component';
import { Sport } from "./model/sport.model";
import { LeagueComponent } from './component/league/league.component';
import { League } from './model/league.model';


const routes: Routes = [
  { 
    path: 'sport/:id',
    component: SportComponent,
    data: Sport
   },
   { 
    path: 'sport/league/:id',
    component: LeagueComponent,
    data: League
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
