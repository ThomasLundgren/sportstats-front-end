import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Sport } from "../model/sport.model";

@Injectable({
  providedIn: "root"
})
export class SportService {
  constructor(private http: HttpClient) {}

  getSports() {
    //Dev
    return this.http.get<Sport[]>("/api/sport/all");
    //Prod
    //return this.http.get<Sport[]>("http://gruppmalin.jls-sto1.elastx.net/api/sport/all");
  }
}
