import { Injectable } from "@angular/core";
import { League } from "../model/league.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LeagueService {
  constructor(private http: HttpClient) {}

  getLeaguesBySportId(sportId: number) {
    return this.http.get<League[]>("/api/league/sport/" + sportId);
  }
  getLeagueById(leagueId: string) {
    return this.http.get<League>("/api/league/" + leagueId);
  }
  addLeagueBySportId(leaguge: League): Observable<League>{
    return this.http.post<League>("/api/league/add/" + leaguge.id + "/" + leaguge.name, JSON.stringify(leaguge));
  }
}
