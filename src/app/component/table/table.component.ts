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
  tableDummy: Table = {
    season: {
      id: 0,
      startDate: new Date(),
      endDate: new Date(),
      leagueId: 0,
      roundLimit: 10
    },
    tableRows: []
  }
  table: Table;

  constructor(private route: ActivatedRoute, private tableService: TableService) { }

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
