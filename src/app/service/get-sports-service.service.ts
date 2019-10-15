import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sport } from '../model/sport.model';

@Injectable({
  providedIn: 'root'
})
export class GetSportsService {

  sports: Sport[];

  constructor(private http: HttpClient) { }

  getSports() {
    return this.http.get<Sport[]>("http://gruppmalin.jls-sto1.elastx.net/api/sport/all");
  }

  setSports(sports: Sport[]) {
    this.sports = sports;
  }

}
