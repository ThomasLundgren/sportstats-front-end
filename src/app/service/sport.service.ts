import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Sport } from "../model/sport.model";

@Injectable({
  providedIn: "root"
})
export class SportService {
  constructor(private http: HttpClient) {}

  getSports() {
    return this.http.get<Sport[]>("/api/sport/all");
  }
}
