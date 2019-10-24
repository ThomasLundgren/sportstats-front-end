import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Sport } from "../model/sport.model";

@Injectable({
  providedIn: "root"
})
export class SportService {
  constructor(private http: HttpClient) { }

  getSports() {
    return this.http.get<Sport[]>("/api/sport/all");
  }

  addSport(sport: Sport): void {

    let url = "/api/sport/add?";

    const body = new HttpParams()
      .set("name", sport.name);

    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http.post(url, body.toString(), options)
      .subscribe(
        res => { console.log("POST Request was successful: " + res) },
        err => { console.log("Error occurred: " + err.toString) });

  }
}
