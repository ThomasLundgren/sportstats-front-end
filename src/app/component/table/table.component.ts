import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from 'src/app/service/table.service';
import { Table } from 'src/app/model/table.model';
import { Season } from 'src/app/model/season.model';
import { TableRow } from 'src/app/model/table-row.model';
import { Subscription } from 'rxjs';


@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {

  @Input() seasonId: number;

  season: Season;
  subscriptions: Subscription[] = [];
  static dateDummy: Date = new Date('December 17, 1995 03:24:00');
  tableDummy: Table = {
    season: {
      id: 0,
      startDate: TableComponent.dateDummy,
      endDate: TableComponent.dateDummy,
      leagueId: 0,
      roundLimit: 10
    },
    tableRows: []
  }
  table: Table;


  constructor(private route: ActivatedRoute, private tableService: TableService) { }

  getSeasonDateToShow(date: Date, noDate: string) {
    if (date === TableComponent.dateDummy)
      return noDate;
    else {
      return date;
    }
  }

  getSeasonStartDateToShow() {
    return this.getSeasonDateToShow(this.table.season.startDate, 'No season avalible.');
  }

  getSeasonEndDateToShow() {
    return this.getSeasonDateToShow(this.table.season.endDate, '');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.seasonId === -1)
      this.table = this.tableDummy;
    else {
      this.subscriptions.push(this.tableService.getTableBySeasonId(this.seasonId).subscribe(data => {
        this.table = data;
      }));
    }
  }

  ngOnInit() {
    this.table = this.tableDummy;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
