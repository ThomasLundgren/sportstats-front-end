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
import { TeamService } from 'src/app/service/team.service';
import { GoalService } from 'src/app/service/goal.service';
import { Goal } from 'src/app/model/goal.model';

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
  pointsValidator = [Validators.required, Validators.min(1)];
  penalty: boolean = false;

  constructor(
    private fb: FormBuilder,
    private sportService: SportService,
    private leagueService: LeagueService,
    private seasonService: SeasonService,
    private gameService: GameService,
    private teamService: TeamService,
    private goalService: GoalService
  ) {}

  ngOnInit() {
    this.goalForm = this.fb.group({
      sport: ["", [Validators.required]],
      league: ["", [Validators.required]],
      season: ["", [Validators.required]],
      game: ["", [Validators.required]],
      period: ["", Validators.required],
      points: ["", this.pointsValidator],
      time: ["", [Validators.required]],
      penalty: [""]
    });
    let sub = this.sportService.getSports().subscribe(sports => (this.sports = sports));
    this.subscriptions.add(sub);
  }

  onSubmit() {
    let goal = new Goal();
    goal.penalty = this.penalty;
    
    goal.periodId = this.goalForm.get("period").value;
    goal.playerId = 1;
    goal.points = this.points().value;
    goal.teamId = 1;
    goal.goalTime = this.time().value;
    console.log(JSON.stringify(goal));
    
    this.goalService.addGoal(goal);
  }

  onReset() {
    this.leagues = [];
    this.seasons = [];
    this.games = [];
    this.periods = [];
    this.points().reset();
    this.time().reset();
  }

  points() {
    return this.goalForm.get("points");
  }

  time() {
    return this.goalForm.get("time");
  }

  league() {
    return this.goalForm.get('league');
  }

  getLeagues() {
    return this.leagues;
  }

  sportChanged(sportId: number) {
    this.league().updateValueAndValidity();  
    this.getLeaguesBySportId(sportId);
  }

  leagueChanged(leagueId: number) {
    this.getSeasonsByLeagueId(leagueId);
  }

  seasonChanged(seasonId: number) {
    this.getGamesBySeasonId(seasonId);
  }

  setPenalty(event) {
    this.penalty = event.srcElement.checked;
  }

  gameChanged(gameId: number) {
    let found = this.games.find(game => game.id == gameId);
    if (found) {
      this.periods = found.periods;
    }
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
      .subscribe(games => {
        this.games = games;
        this.setGameInfo();
      });
    this.subscriptions.add(sub);
  }

  setGameInfo(): void {
    this.games.forEach(e => {
      e.gameInfo = "";

      this.subscriptions.add(
        this.teamService.getTeamById(e.homeTeamId).subscribe(data => {
          e.gameInfo += data.name + " - ";
          this.subscriptions.add(
            this.teamService.getTeamById(e.guestTeamId).subscribe(data => {
              e.gameInfo += data.name;
            })
          );
        })
      );
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
