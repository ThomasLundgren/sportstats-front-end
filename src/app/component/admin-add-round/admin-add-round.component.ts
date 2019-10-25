import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { dateValidator } from "src/app/validator/validator";
import { Season } from "src/app/model/season.model";
import { SeasonService } from "src/app/service/season.service";
import { SportService } from "src/app/service/sport.service";
import { LeagueService } from "src/app/service/league.service";
import { Sport } from 'src/app/model/sport.model';
import { Subscription } from 'rxjs';
import { League } from 'src/app/model/league.model';

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
    private leagueService: LeagueService
  ) {}

  ngOnInit() {
    this.getSports();
    this.addRoundForm = this.fb.group({
      sports: ["", this.requiredAndUpdateOnBlur],
      leagues: ["", this.requiredAndUpdateOnBlur],
      seasons: ["", this.requiredAndUpdateOnBlur],
      startDate: [
        "",
        { validators: [dateValidator, Validators.required], updateOn: "blur" }
      ],
      endDate: [
        "",
        { validators: [dateValidator, Validators.required], updateOn: "blur" }
      ],
      roundNumber: ["", { validators: [Validators.required, Validators.min(1)], updateOn: 'blur' }]
    });

    this.addRoundForm.controls.endDate.valueChanges.subscribe(change => {
      this.addRoundForm.controls.startDate.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    this.onReset();
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
