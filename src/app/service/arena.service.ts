import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Arena } from '../model/arena.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArenaService {

  constructor(private http: HttpClient) { }

  addArena(arena: Arena): void {

    let url = "/api/arena/add/";

    const body = new HttpParams()
      .set("", arena.arenaName);

    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http.post<Arena>(url + arena.arenaName, JSON.stringify(arena))
      .subscribe(
        res => { console.log("POST Request was successful: " + res) },
        err => { console.log("Error occurred: " + err.toString) });

  }

}
