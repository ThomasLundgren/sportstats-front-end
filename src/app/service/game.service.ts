import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../model/game.model';
import { Observable } from 'rxjs';
import { Period } from '../model/period.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  constructor(private http: HttpClient) { }

  getGamesBySeasonId(seasonId: number) {
    return this.http.get<Game[]>("/api/game/season/" + seasonId);
  }

  public getGamesByHomeTeamId(teamId: number): Observable<Game[]> {
    return this.http.get<Game[]>("/api/game/home/" + teamId);
  }

  addPeriod(period: Period): void {
    
    let url = "/api/game/add/period" + period.gameId + "/" + period.overtime;

    this.http.post<Period>(url, JSON.stringify(period))
      .subscribe(
        res => { console.log("POST Request was successful: " + res) },
        err => { console.log("Error occurred: " + err.toString) });


  }

}
