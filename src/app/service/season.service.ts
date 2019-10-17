import { Injectable } from "@angular/core";
import { Season } from '../model/season.model';
import { HttpClient } from '@angular/common/http';
import { LeagueService } from './league.service';

@Injectable({
  providedIn: "root"
})
export class SeasonService {

  constructor(private http: HttpClient, private leagueService: LeagueService) {}

  getSeasonsByLeagueId(leagueId: number) {
    return this.http.get<Season[]>("/api/season/all/" + leagueId);
  }

  getSeasonsBySportId(sportId: number) {
    let seasons = [];
    
    this.leagueService.getLeaguesBySportId(sportId).subscribe(leagues => { 
      leagues.forEach(league => {
        this.getSeasonsByLeagueId(league.id).subscribe(s => {
          s.forEach(season => seasons.push(s));
        });
      });
    });
    return seasons;
  }
}
