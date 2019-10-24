import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { LeagueService } from "src/app/service/league.service";
import { Sport } from "src/app/model/sport.model";
import { SportService } from "src/app/service/sport.service";
import { League } from "src/app/model/league.model";
import { dateValidator } from "../../validator/validator";

@Component({
  selector: "app-admin-add-season",
  templateUrl: "./admin-add-season.component.html",
  styleUrls: ["./admin-add-season.component.scss"]
})
export class AdminAddSeasonComponent implements OnInit {
  sports: Sport[] = [];
  leagues: League[] = [];
  standardValidator = [Validators.required, Validators.minLength(2)];
  numberValidator = [Validators.required, Validators.min(1), Validators.max(50)];
  addSeasonForm: FormGroup;

  constructor(
    private sportService: SportService,
    private leagueService: LeagueService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getSports();
    this.addSeasonForm = this.fb.group({
      leagueId: ["", this.standardValidator],
      roundLimit: ["", this.numberValidator],
      startDate: ["", dateValidator],
      endDate: ["", { validators: [dateValidator], updateOn: 'blur' }]
    });

    this.addSeasonForm.controls.endDate.valueChanges.subscribe(change => {
      this.addSeasonForm.controls.startDate.updateValueAndValidity();
    });
  }

  control() {
    return this.addSeasonForm.controls;
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

  onSubmit(): void {
    this.addSeasonForm.controls.roundLimit.reset();
    //this.addSeasonForm.controls.startDate.reset();
    //this.addSeasonForm.controls.endDate.reset();
  }

  onReset(): void {
    this.leagues = [];
  }

  sportChanged(sportId: number): void {
    this.getLeaguesBySportId(sportId);
  }
}
