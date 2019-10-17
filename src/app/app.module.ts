import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SportComponent } from './component/sport/sport.component';
import { LeagueComponent } from './component/league/league.component';
import { HomeComponent } from './component/home/home.component';
import { UpcomingGamesBySportComponent } from './component/upcoming-games-by-sport/upcoming-games-by-sport.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SportComponent,
      LeagueComponent,
      HomeComponent,
      UpcomingGamesBySportComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
