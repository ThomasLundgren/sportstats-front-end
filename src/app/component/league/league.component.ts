import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/service/league.service';
import { League } from 'src/app/model/league.model';
import { TableService } from 'src/app/service/table.service';
import { Table } from 'src/app/model/table.model';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  league: League = {
    name: '',
    id: 0,
    sportId: 0,
    seasons: []
  };
  latestSeasonId = 1;

  constructor(private route: ActivatedRoute, private leagueService: LeagueService, private tableService: TableService, private seasonServie: SeasonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.leagueService.getLeagueById(params.get('id')).subscribe(data => {
        console.log(data);
        this.league = data;
        this.seasonServie.getSeasonsByLeagueId(this.league.id).subscribe(seasonsData => {
          debugger;
          this.league.seasons = seasonsData;
          this.latestSeasonId = this.league.seasons.pop().id;
        });
      });
    });
  }
}
