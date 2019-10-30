import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/service/league.service';
import { League } from 'src/app/model/league.model';
import { TableService } from 'src/app/service/table.service';
import { SeasonService } from 'src/app/service/season.service';
import { Season } from 'src/app/model/season.model';

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
  latestSeasonId = 0;
  noSeasonVariable = -1;

  constructor(private route: ActivatedRoute, private leagueService: LeagueService, private tableService: TableService, private seasonServie: SeasonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.league.id = parseInt(paramMap.get('id'));
      this.getSeasonsByLeagueId(this.league.id);
    });
  }
  getSeasonsByLeagueId(leagueId) {
    this.seasonServie.getSeasonsByLeagueId(leagueId).subscribe(seasons => {
      this.league.seasons = seasons;
      this.getSeasonIdBySeasons(seasons);
    });
  }
  getSeasonIdBySeasons(seasons: Season[]) {
    seasons = seasons.sort((a, b) => (a.startDate > b.startDate) ? 1 : ((b.startDate > a.startDate) ? -1 : 0));
    if (seasons.length < 1)
      this.latestSeasonId = this.noSeasonVariable;
    else {
      this.latestSeasonId = seasons[seasons.length - 1].id;
    }
  }
  changeShowingSeason(id){
    this.latestSeasonId = id;
  }
}