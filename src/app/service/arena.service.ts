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

    let url = "/api/arena/add/" + arena.arenaName;

    this.http.post<Arena>(url, JSON.stringify(arena))
      .subscribe(
        res => { console.log("POST Request was successful: " + res) },
        err => { console.log("Error occurred: " + err.toString) });

  }

}
