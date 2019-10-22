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

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SportComponent,
      LeagueComponent,
      HomeComponent,
      UpcomingGamesBySportComponent,
      GameComponent,
      AdminComponent
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
