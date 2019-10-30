import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Team } from '../model/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeamById(teamId: number) {
    return this.http.get<Team>('/api/team/' + teamId);
  }
  getTeamsBySportId(sportId: number){
    return this.http.get<Team[]>('/api/team/sport/' + sportId);
  }

  addTeam(team: Team): void {

    let url = "/api/team/add/" + team.sportId + "/" + team.name;
    console.log(url);

    this.http.post<Team>(url, JSON.stringify(team))
      .subscribe(
        res => { console.log("POST Request was successful: " + res) },
        err => { console.log("Error occurred: " + err.toString) });

  }
}
