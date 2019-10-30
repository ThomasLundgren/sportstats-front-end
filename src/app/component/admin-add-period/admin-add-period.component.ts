import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SportService } from 'src/app/service/sport.service';
import { LeagueService } from 'src/app/service/league.service';
import { Sport } from 'src/app/model/sport.model';
import { League } from 'src/app/model/league.model';
import { SeasonService } from 'src/app/service/season.service';
import { Season } from 'src/app/model/season.model';
import { Round } from 'src/app/model/round.model';
import { Game } from 'src/app/model/game.model';

@Component({
  selector: 'app-admin-add-period',
  templateUrl: './admin-add-period.component.html',
  styleUrls: ['./admin-add-period.component.scss']
})
export class AdminAddPeriodComponent implements OnInit {

  sports: Sport[] = [];
  leagues: League[] = [];
  seasons: Season[] = [];
  rounds: Round[] = [];
  games: Game[] = [];

  addPeriodForm = new FormGroup({
    sportId: new FormControl(''),
    leagueId: new FormControl(''),
    seasonId: new FormControl(''),
    roundId: new FormControl(''),
    gameId: new FormControl(''),
    overtime: new FormControl(''),
    goals: new FormControl(''),
  });

  constructor(
    private sportService: SportService,
    private leagueService: LeagueService,
    private seasonService: SeasonService,
    //private roundService: RoundService
    ) { }

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports().subscribe(data => {
      this.sports = data;
    });
  }

  getLeaguesBySportId(sportId: number): void {
    this.leagueService.getLeaguesBySportId(sportId).subscribe(data => {
      this.leagues = data;
    });
  }

  getSeasonsByLeagueId(leagueId: number): void {
    this.seasonService.getSeasonsByLeagueId(leagueId).subscribe(data => {
      this.seasons = data;
    });
  }

  getRoundsBySeasonId(seasonId: number): void{

  }

  onReset(): void {
    this.leagues = [];
    this.seasons = [];
  }

  sportChanged(sportId: number): void{
    this.getLeaguesBySportId(sportId);
  }

  leagueChanged(leagueId: number): void{
    this.getSeasonsByLeagueId(leagueId);
  }

  seasonChanged(seasonId: number): void{
    this.getRoundsBySeasonId(seasonId);
  }

}
