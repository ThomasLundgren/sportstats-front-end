import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LeagueService } from "src/app/service/league.service";
import { Sport } from "src/app/model/sport.model";
import { SportService } from "src/app/service/sport.service";
import { League } from "src/app/model/league.model";
import { dateValidator } from "../../validator/validator";
import { SeasonService } from "src/app/service/season.service";
import { Season } from "src/app/model/season.model";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-admin-add-season",
  templateUrl: "./admin-add-season.component.html",
  styleUrls: ["./admin-add-season.component.scss"]
})
export class AdminAddSeasonComponent implements OnInit, OnDestroy {
  sports: Sport[] = [];
  leagues: League[] = [];
  standardValidator = [Validators.required, Validators.minLength(2)];
  roundValidator = [Validators.required, Validators.min(1), Validators.max(50)];
  addSeasonForm: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    private sportService: SportService,
    private leagueService: LeagueService,
    private seasonService: SeasonService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getSports();
    this.addSeasonForm = this.fb.group({
      leagueId: ["", this.standardValidator],
      roundLimit: ["", this.roundValidator],
      startDate: ["", [dateValidator, Validators.required]],
      endDate: [
        "",
        { validators: [dateValidator, Validators.required], updateOn: "blur" }
      ]
    });

    let sub = this.addSeasonForm.controls.endDate.valueChanges.subscribe(change => {
      this.addSeasonForm.controls.startDate.updateValueAndValidity();
    });

    this.subscriptions.push(sub);
  }

  control() {
    return this.addSeasonForm.controls;
  }

  private getSports(): void {
    let sub = this.sportService.getSports().subscribe(data => {
      this.sports = data;
    });
    this.subscriptions.push(sub);
  }

  private getLeaguesBySportId(sportId: number): void {
    let sub = this.leagueService.getLeaguesBySportId(sportId).subscribe(data => {
      this.leagues = data;
    });
    this.subscriptions.push(sub);
  }

  onSubmit(): void {
    let season = new Season();
    season.leagueId = this.control().leagueId.value;
    season.startDate = this.control().startDate.value;
    season.endDate = this.control().endDate.value;
    season.roundLimit = this.control().roundLimit.value;

    let addNext = next => this.onReset();
    let addError = error => console.log("Error adding sport: " + JSON.stringify(error));

    let sub = this.seasonService.addSeason(season).subscribe(addNext, addError);
    this.subscriptions.push(sub);
  }

  onReset(): void {
    this.addSeasonForm.controls.roundLimit.reset();
    this.leagues = [];
  }

  sportChanged(sportId: number): void {
    this.getLeaguesBySportId(sportId);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
