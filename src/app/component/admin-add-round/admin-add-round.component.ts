import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { dateValidator } from "src/app/validator/validator";
import { Season } from "src/app/model/season.model";
import { SeasonService } from "src/app/service/season.service";
import { SportService } from "src/app/service/sport.service";
import { LeagueService } from "src/app/service/league.service";
import { Sport } from "src/app/model/sport.model";
import { Subscription } from "rxjs";
import { League } from "src/app/model/league.model";
import { Round } from "src/app/model/round.model";
import { RoundService } from "src/app/service/round.service";

@Component({
  selector: "app-admin-add-round",
  templateUrl: "./admin-add-round.component.html",
  styleUrls: ["./admin-add-round.component.scss"]
})
export class AdminAddRoundComponent implements OnInit, OnDestroy {
  addRoundForm: FormGroup;
  subscriptions: Subscription[] = [];
  sports: Sport[] = [];
  leagues: League[] = [];
  seasons: Season[] = [];
  requiredAndUpdateOnBlur = { validators: [Validators.required], updateOn: "blur" };

  constructor(
    private fb: FormBuilder,
    private seasonService: SeasonService,
    private sportService: SportService,
    private roundService: RoundService,
    private leagueService: LeagueService
  ) {}

  ngOnInit() {
    this.getSports();
    this.addRoundForm = this.fb.group({
      sports: ["", Validators.required],
      leagues: ["", Validators.required],
      seasons: ["", this.requiredAndUpdateOnBlur],
      startDate: [
        "",
        { validators: [dateValidator, Validators.required], updateOn: "blur" }
      ],
      endDate: [
        "",
        { validators: [dateValidator, Validators.required], updateOn: "blur" }
      ],
      roundNumber: [
        "",
        { validators: [Validators.required, Validators.min(1)], updateOn: "blur" }
      ]
    });

    let sub = this.addRoundForm.controls.endDate.valueChanges.subscribe(change => {
      this.addRoundForm.controls.startDate.updateValueAndValidity();
      console.log("startDate: " + JSON.stringify(this.startDate().errors));
      console.log("endDate: " + JSON.stringify(this.endDate().errors));
      console.log("roundNumber: " + JSON.stringify(this.roundNumber().errors));
      console.log("sport: " + JSON.stringify(this.sportAttr().errors));
      console.log("league: " + JSON.stringify(this.leagueAttr().errors));
    });
    this.subscriptions.push(sub);
  }

  onSubmit(): void {
    let round = new Round();
    round.seasonId = this.seasonAttr().value;
    round.startDate = this.startDate().value;
    round.endDate = this.endDate().value;
    round.roundNumber = this.roundNumber().value;

    let addNext = next => this.onReset();
    let addError = error => console.log("Error adding round: " + JSON.stringify(error));

    let sub = this.roundService.addRound(round).subscribe(addNext, addError);
    this.subscriptions.push(sub);
  }

  onReset(): void {
    this.leagues = [];
    this.seasons = [];
    this.roundNumber().reset();
    this.startDate().reset();
    this.endDate().reset();
  }

  roundNumber() {
    return this.addRoundForm.get("roundNumber");
  }

  startDate() {
    return this.addRoundForm.get("startDate");
  }

  endDate() {
    return this.addRoundForm.get("endDate");
  }

  seasonAttr() {
    return this.addRoundForm.get("seasons");
  }

  sportAttr() {
    return this.addRoundForm.get("sports");
  }

  leagueAttr() {
    return this.addRoundForm.get("leagues");
  }

  getSports() {
    let sub = this.sportService.getSports().subscribe(sports => {
      this.sports = sports;
    });
    this.subscriptions.push(sub);
  }

  getLeaguesBySportId(sportId: number) {
    let sub = this.leagueService.getLeaguesBySportId(sportId).subscribe(leagues => {
      this.leagues = leagues;
    });
    this.subscriptions.push(sub);
  }

  getSeasonsByLeagueId(leagueId: number) {
    let sub = this.seasonService.getSeasonsByLeagueId(leagueId).subscribe(seasons => {
      this.seasons = seasons;
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  sportChanged(sportId: number) {
    this.leagues = [];
    this.getLeaguesBySportId(sportId);
  }

  leagueChanged(leagueId: number) {
    this.getSeasonsByLeagueId(leagueId);
  }
}
