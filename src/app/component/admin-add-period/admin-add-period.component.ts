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
import { RoundService } from 'src/app/service/round.service';
import { GameService } from 'src/app/service/game.service';
import { Subscription } from 'rxjs';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-admin-add-period',
  templateUrl: './admin-add-period.component.html',
  styleUrls: ['./admin-add-period.component.scss']
})
export class AdminAddPeriodComponent implements OnInit {

  subscriptions: Subscription = new Subscription();

  sports: Sport[] = [];
  leagues: League[] = [];
  seasons: Season[] = [];
  games: Game[] = [];
  gamesInfo: string[] = [];

  addPeriodForm = new FormGroup({
    sportId: new FormControl(''),
    leagueId: new FormControl(''),
    seasonId: new FormControl(''),
    gameId: new FormControl(''),
    overtime: new FormControl(''),
    goals: new FormControl(''),
  });

  constructor(
    private sportService: SportService,
    private leagueService: LeagueService,
    private seasonService: SeasonService,
    private gameService: GameService,
    private teamService: TeamService,
    ) { }

  ngOnInit() {
    this.getSports();
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  getSports(): void {
    this.subscriptions.add(this.sportService.getSports().subscribe(data => {
      this.sports = data;
    }));
  }

  getLeaguesBySportId(sportId: number): void {
    this.subscriptions.add(this.leagueService.getLeaguesBySportId(sportId).subscribe(data => {
      this.leagues = data;
    }));
  }

  getSeasonsByLeagueId(leagueId: number): void {
    this.subscriptions.add(this.seasonService.getSeasonsByLeagueId(leagueId).subscribe(data => {
      this.seasons = data;
    }));
  }

  getGamesBySeasonId(seasonId: number): void{
    this.subscriptions.add(this.gameService.getGamesBySeasonId(seasonId).subscribe(data => {
      this.games = data;
      this.getCurrentGameInfo();
    }));
  }

  onReset(): void {
    this.leagues = [];
    this.seasons = [];
    this.games = [];
  }

  sportChanged(sportId: number): void{
    this.getLeaguesBySportId(sportId);
  }

  leagueChanged(leagueId: number): void{
    this.getSeasonsByLeagueId(leagueId);
  }

  seasonChanged(seasonId: number): void{
    this.getGamesBySeasonId(seasonId);
  }

  getCurrentGameInfo(): void{

    let teamService = this.teamService;

    this.games.forEach(e => {

      let gameInfoRow = "";

      this.subscriptions.add(teamService.getTeamById(e.homeTeamId).subscribe(data => {
        gameInfoRow += data.name;
      }));

      gameInfoRow += " - ";

      this.subscriptions.add(teamService.getTeamById(e.guestTeamId).subscribe(data => {
        gameInfoRow += data.name;
      }));

      gameInfoRow += " " + e.gameDate;

      this.gamesInfo.push(gameInfoRow);

    });

  }

}
