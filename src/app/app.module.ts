import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SportComponent } from './component/sport/sport.component';
import { LeagueComponent } from './component/league/league.component';
import { HomeComponent } from './component/home/home.component';
import { GameComponent } from './component/game/game.component';
import { UpcomingGamesBySportComponent } from './component/upcoming-games-by-sport/upcoming-games-by-sport.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminComponent } from './component/admin/admin.component';
import { TableComponent } from './component/table/table.component';
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { AdminMainComponent } from './component/admin-main/admin-main.component';
import { AdminAddSportComponent } from './component/admin-add-sport/admin-add-sport.component';
import { AdminAddLeagueComponent } from './component/admin-add-league/admin-add-league.component';
import { AdminAddSeasonComponent } from './component/admin-add-season/admin-add-season.component';
import { AdminAddRoundComponent } from './component/admin-add-round/admin-add-round.component';
import { AdminAddTeamComponent } from './component/admin-add-team/admin-add-team.component';
import { AdminAddPeriodComponent } from './component/admin-add-period/admin-add-period.component';
import { AdminAddGoalComponent } from './component/admin-add-goal/admin-add-goal.component';
import { AdminAddArenaComponent } from './component/admin-add-arena/admin-add-arena.component';
import { ProgressComponent } from './component/progress/progress.component';
import { TeamsBySportComponent } from './component/teams-by-sport/teams-by-sport.component';
import { UpcomingGamesByTeamComponent } from './upcoming-games-by-team/upcoming-games-by-team.component';
import { AdminEditConnectTeamToSeasonComponent } from './component/admin-edit-connect-team-to-season/admin-edit-connect-team-to-season.component';
import { AdminEditSetTeamPointsForGameComponent } from './component/admin-edit-set-team-points-for-game/admin-edit-set-team-points-for-game.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SportComponent,
      LeagueComponent,
      HomeComponent,
      UpcomingGamesBySportComponent,
      GameComponent,
      AdminComponent,
      TableComponent,
      AdminMenuComponent,
      AdminMainComponent,
      AdminAddSportComponent,
      AdminAddLeagueComponent,
      AdminAddSeasonComponent,
      AdminAddRoundComponent,
      AdminAddTeamComponent,
      AdminAddPeriodComponent,
      AdminAddGoalComponent,
      AdminAddArenaComponent,
      ProgressComponent,
      TeamsBySportComponent,
      UpcomingGamesByTeamComponent,
      AdminEditConnectTeamToSeasonComponent,
      AdminEditSetTeamPointsForGameComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FontAwesomeModule,
      FormsModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
