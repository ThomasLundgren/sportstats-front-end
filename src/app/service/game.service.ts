import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../model/game.model';
import { Observable } from 'rxjs';

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
}
