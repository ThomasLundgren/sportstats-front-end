import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  OnInit
} from "@angular/core";
import { Season } from "../../model/season.model";
import { SeasonService } from "../../service/season.service";
import { Sport } from "src/app/model/sport.model";
import { LeagueService } from "src/app/service/league.service";
import { League } from "src/app/model/league.model";
import { GameService } from "src/app/service/game.service";
import { Game } from "src/app/model/game.model";
import { Subscription } from "rxjs";
import { TeamService } from "src/app/service/team.service";

@Component({
  selector: "app-upcoming-games-by-sport",
  templateUrl: "./upcoming-games-by-sport.component.html",
  styleUrls: ["./upcoming-games-by-sport.component.css"]
})
export class UpcomingGamesBySportComponent implements OnChanges, OnDestroy, OnInit {
  @Input() sport: Sport;
  private subcriptions = new Subscription();
  public upcomingGames;
  public isLoading = true;

  constructor(
    private leagueService: LeagueService,
    private seasonService: SeasonService,
    private gameService: GameService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes["sport"].firstChange) {
      this.isLoading = true;
      this.upcomingGames = [];
      this.getUpcomingGames();
      this.sport = changes["sport"].currentValue;
      this.setLeagues();
    }
  }

  public getUpcomingGames() {
    return this.upcomingGames;
  }

  ngOnDestroy() {
    this.subcriptions.unsubscribe();
  }

  private setLeagues(): void {
    let sub = this.leagueService.getLeaguesBySportId(this.sport.id).subscribe(leagues => {
      this.sport.leagues = leagues;
      if (leagues.length == 0) {
        this.isLoading = false;
      }
      leagues.forEach(league => this.setSeasonsForLeague(league));
    },
    () => {
      this.isLoading = false;
    });
    this.subcriptions.add(sub);
  }

  private setSeasonsForLeague(league: League): void {
    let sub = this.seasonService.getSeasonsByLeagueId(league.id).subscribe(seasons => {
      league.seasons = seasons;
      seasons.forEach(season => {
        this.setGames(season, league.name);
      });
    });
    this.subcriptions.add(sub);
  }

  private setGames(season: Season, leagueName: string): void {
    let sub = this.gameService.getGamesBySeasonId(season.id).subscribe(games => {
      games.forEach(game => {
        this.addHomeTeam(game.homeTeamId, game.guestTeamId, game, leagueName);
      });
    });
    this.subcriptions.add(sub);
  }

  private addHomeTeam(
    homeTeamId: number,
    awayTeamId: number,
    game: Game,
    leagueName: string
  ) {
    let sub = this.teamService.getTeamById(homeTeamId).subscribe(team => {
      game = { ...game, ...{ homeTeam: team } };
      this.addAwayTeam(awayTeamId, game, leagueName);
    });
    this.subcriptions.add(sub);
  }

  private addAwayTeam(awayTeamId: number, game: Game, leagueName) {
    let sub = this.teamService.getTeamById(awayTeamId).subscribe(team => {
      game = { ...game, ...{ awayTeam: team } };
      this.addGame(game, leagueName);
      this.isLoading = false;
    });
    this.subcriptions.add(sub);
  }

  private addGame(game: Game, leagueName: string) {
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
  }
}
