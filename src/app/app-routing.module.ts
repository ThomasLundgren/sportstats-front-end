
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sport } from "./model/sport.model";
import { LeagueComponent } from './component/league/league.component';
import { League } from './model/league.model';

import { SportComponent } from './component/sport/sport.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminMainComponent } from './component/admin-main/admin-main.component';
import { AdminAddSportComponent } from './component/admin-add-sport/admin-add-sport.component';
import { AdminAddLeagueComponent } from './component/admin-add-league/admin-add-league.component';
import { AdminAddSeasonComponent } from './component/admin-add-season/admin-add-season.component';
import { AdminAddRoundComponent } from './component/admin-add-round/admin-add-round.component';
import { AdminAddTeamComponent } from './component/admin-add-team/admin-add-team.component';
import { AdminAddPeriodComponent } from './component/admin-add-period/admin-add-period.component';
import { AdminAddGoalComponent } from './component/admin-add-goal/admin-add-goal.component';
import { AdminAddArenaComponent } from './component/admin-add-arena/admin-add-arena.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: "",
        component: AdminMainComponent,
      },
      {
        path: "addsport",
        component: AdminAddSportComponent,
      },
      {
        path: "addleague",
        component: AdminAddLeagueComponent,
      },
      {
        path: "addseason",
        component: AdminAddSeasonComponent,
      },
      {
        path: "addround",
        component: AdminAddRoundComponent,
      },
      {
        path: "addteam",
        component: AdminAddTeamComponent,
      },
      {
        path: "addperiod",
        component: AdminAddPeriodComponent,
      },
      {
        path: "addgoal",
        component: AdminAddGoalComponent,
      },
      {
        path: "addarena",
        component: AdminAddArenaComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  sports: Sport[];

  constructor() { }
}
