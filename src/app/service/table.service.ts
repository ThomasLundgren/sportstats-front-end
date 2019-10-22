import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Table } from '../model/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

constructor(private http: HttpClient) { }

  getTableBySeasonId(seasonId: number){
    return this.http.get<Table>("/api/table/season/" + seasonId + "/asc");
  }
}
