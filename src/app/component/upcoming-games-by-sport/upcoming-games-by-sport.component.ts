import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { Season } from "../../model/season.model";
import { SeasonService } from "../../service/season.service";
import { Sport } from "src/app/model/sport.model";
import { LeagueService } from "src/app/service/league.service";
import { League } from "src/app/model/league.model";
import { GameService } from "src/app/service/game.service";
import { Game } from "src/app/model/game.model";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-upcoming-games-by-sport",
  templateUrl: "./upcoming-games-by-sport.component.html",
  styleUrls: ["./upcoming-games-by-sport.component.css"]
})
export class UpcomingGamesBySportComponent implements OnChanges, OnDestroy {
  @Input() sport: Sport;
  private subcriptions: Subscription[] = [];
  public upcomingGames = [];

  constructor(
    private leagueService: LeagueService,
    private seasonService: SeasonService,
    private gameService: GameService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["sport"].currentValue.id !== 0) {
      this.sport = changes["sport"].currentValue;
      this.setLeagues();
    }
  }

  public getUpcomingGames() {
    return this.upcomingGames;
  }

  private setLeagues(): void {
    this.subcriptions.push(this.leagueService.getLeaguesBySportId(this.sport.id).subscribe(leagues => {
      this.sport.leagues = leagues;
      leagues.forEach(league => this.setSeasonsForLeague(league));
      console.log("Leagues: " + JSON.stringify(this.sport.leagues));
    }));
  }

  private setSeasonsForLeague(league: League): void {
    this.subcriptions.push(this.seasonService.getSeasonsByLeagueId(league.id).subscribe(seasons => {
      league.seasons = seasons;
      seasons.forEach(season => {
        this.setGames(season, league.name);
      });
    }));
  }

  private setGames(season: Season, leagueName: string): void {
    this.subcriptions.push(this.gameService.getGamesBySeasonId(season.id).subscribe(games => {
      games.forEach(game => {
        if (new Date(game.gameDate) > new Date()) {
          let found = this.upcomingGames.find(element => {
            return element.leagueName === leagueName;
          });
          if (found) {
            found.games.push(game);
          } else {
            let gameArr = [game];
            this.upcomingGames.push({
              leagueName: leagueName,
              games: gameArr
            });
          }
        }
      });
    }));
  }

  ngOnDestroy() {
    this.subcriptions.forEach(sub => sub.unsubscribe);
  }

}
