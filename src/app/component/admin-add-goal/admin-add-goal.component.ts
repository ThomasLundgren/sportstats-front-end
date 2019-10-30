import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SportService } from "src/app/service/sport.service";
import { LeagueService } from "src/app/service/league.service";
import { SeasonService } from "src/app/service/season.service";
import { GameService } from "src/app/service/game.service";
import { Sport } from "src/app/model/sport.model";
import { League } from "src/app/model/league.model";
import { Season } from "src/app/model/season.model";
import { Game } from "src/app/model/game.model";
import { Period } from "src/app/model/period.model";

@Component({
  selector: "app-admin-add-goal",
  templateUrl: "./admin-add-goal.component.html",
  styleUrls: ["./admin-add-goal.component.scss"]
})
export class AdminAddGoalComponent implements OnInit, OnDestroy {
  goalForm: FormGroup;
  subscriptions = new Subscription();
  requiredAndUpdateOnBlur = { validators: [Validators.required], updateOn: "blur" };
  sports: Sport[] = [];
  leagues: League[] = [];
  seasons: Season[] = [];
  games: Game[] = [];
  periods: Period[] = [];

  constructor(
    private fb: FormBuilder,
    private sportService: SportService,
    private leagueService: LeagueService,
    private seasonService: SeasonService,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.goalForm = this.fb.group({
      sport: ["", [Validators.required]],
      league: ["", [Validators.required]],
      season: ["", [Validators.required]],
      game: ["", [Validators.required]],
      period: ["", Validators.required],
      player: ["", [Validators.required]],
      points: ["", [Validators.required]],
      time: ["", [Validators.required]],
      penalty: [""]
    });
  }

  sportChanged(sportId: number) {
    this.leagues = [];
    this.getLeaguesBySportId(sportId);
  }

  leagueChanged(leagueId: number) {
    this.seasons = [];
    this.getSeasonsByLeagueId(leagueId);
  }

  seasonChanged(seasonId: number) {
    this.games = [];
    this.getGamesBySeasonId(seasonId);
  }

  getLeaguesBySportId(sportId: number) {
    let sub = this.leagueService
      .getLeaguesBySportId(sportId)
      .subscribe(leagues => (this.leagues = leagues));
    this.subscriptions.add(sub);
  }

  getSeasonsByLeagueId(leagueId: number) {
    let sub = this.seasonService
      .getSeasonsByLeagueId(leagueId)
      .subscribe(seasons => (this.seasons = seasons));
    this.subscriptions.add(sub);
  }

  getGamesBySeasonId(seasonId: number) {
    let sub = this.gameService
      .getGamesBySeasonId(seasonId)
      .subscribe(games => (this.games = games));
    this.subscriptions.add(sub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
