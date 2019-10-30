import { Injectable } from "@angular/core";
import { Season } from "../model/season.model";
import { HttpClient } from "@angular/common/http";
import { LeagueService } from "./league.service";

@Injectable({
  providedIn: "root"
})
export class SeasonService {
  constructor(private http: HttpClient, private leagueService: LeagueService) {}

  getSeasonsByLeagueId(leagueId: number) {
    return this.http.get<Season[]>("/api/season/all/league/" + leagueId);
  }

  addSeason(season: Season) {
    return this.http.post<Season>(
      `api/season/add/${season.startDate}/${season.endDate}/${season.leagueId}/${season.roundLimit}`,
      season
    );
  }
}
