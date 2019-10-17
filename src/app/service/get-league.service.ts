import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { League } from '../model/league.model';

@Injectable({
  providedIn: 'root'
})
export class GetLeagueService {

  leagues: League[];

  constructor(private http: HttpClient) { }

  getLeagues(leagueIds: number[]) {

    this.leagues = [];

    //Dev
    leagueIds.forEach(e => {

      let json = this.http.get<League>("/api/league/" + e);

      let league = new League(JSON.parse(json));

      //league = this.http.get<League>("/api/league/" + e);

      this.leagues.push();
    });

    //Prod

  }

  setSports(leagues: League[]) {
    this.leagues = leagues;
  }

}
