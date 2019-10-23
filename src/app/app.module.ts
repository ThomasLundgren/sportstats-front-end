import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
      AdminMenuComponent,
      AdminMainComponent,
      AdminAddSportComponent,
      AdminAddLeagueComponent,
      AdminAddSeasonComponent,
      AdminAddRoundComponent,
      AdminAddTeamComponent,
      AdminAddPeriodComponent,
      AdminAddGoalComponent,
      AdminAddArenaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
