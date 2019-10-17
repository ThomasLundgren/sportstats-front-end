import { Injectable } from "@angular/core";
import { League } from "../model/league.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LeagueService {
  constructor(private http: HttpClient) {}

  getLeaguesBySportId(sportId: number) {
    return this.http.get<League[]>("/api/league/sport/" + sportId);
  }
}
