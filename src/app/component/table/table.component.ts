import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TableService } from "src/app/service/table.service";
import { Table } from "src/app/model/table.model";
import { Season } from "src/app/model/season.model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() seasonId: number;

  season: Season;
  table: Table = {
    season: {
      id: 0,
      startDate: new Date(),
      endDate: new Date(),
      leagueId: 0,
      roundLimit: 0
    },
    tableRows: []
  };
  constructor(private route: ActivatedRoute, private tableService: TableService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.tableService.getTableBySeasonId(this.seasonId).subscribe(data => {
        console.log(data);
        this.table = data;
      });
    });
  }
}
