import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Round } from '../model/round.model';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  constructor(private http: HttpClient) { }

  addRound(round: Round) {
    return this.http.post<Round>(
      `/api/round/add/${round.seasonId}/${round.startDate}/${round.endDate}/${round.roundNumber}`,
      JSON.stringify(round)
    );
  }
}
