import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/service/sport.service';
import { Sport } from 'src/app/model/sport.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-admin-add-league",
  templateUrl: "./admin-add-league.component.html",
  styleUrls: ["./admin-add-league.component.scss"]
})
export class AdminAddLeagueComponent implements OnInit {
  nameValidator = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50)
  ];

  sports: Sport[] = [];
  addLeagueForm = new FormGroup({
    name: new FormControl("", { validators: this.nameValidator, updateOn: 'blur'}),
    sport: new FormControl("", { validators: [Validators.required], updateOn: "blur" })
  });

  name() {
    return this.addLeagueForm.get("name");
  }

  sport() {
    return this.addLeagueForm.get("sport");
  }

  constructor(private sportService: SportService) {}

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports().subscribe(data => {
      this.sports = data;
    });
  }

  onSubmit(): void {
    this.addLeagueForm.controls.name.reset();
  }
}
