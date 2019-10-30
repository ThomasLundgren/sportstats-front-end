import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeamService } from 'src/app/service/team.service';
import { Team } from 'src/app/model/team.model';
import { SportService } from 'src/app/service/sport.service';
import { Sport } from 'src/app/model/sport.model';

@Component({
  selector: 'app-admin-add-team',
  templateUrl: './admin-add-team.component.html',
  styleUrls: ['./admin-add-team.component.scss']
})
export class AdminAddTeamComponent implements OnInit {

  nameValidator = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50)
  ];

  sports: Sport[] = [];
  addTeamForm = new FormGroup({
    name: new FormControl('', { validators: this.nameValidator, updateOn: 'blur'}),
    sport: new FormControl("", { validators: [Validators.required], updateOn: "blur" })
  });

  constructor(private sportService: SportService, private teamService: TeamService) { }

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports().subscribe(data => {
      this.sports = data;
    });
  }

  onSubmit() {
    var team = new Team();
    team.name = this.addTeamForm.controls.name.value;
    team.sportId = this.addTeamForm.controls.sport.value;
    this.addTeam(team);
    this.addTeamForm.reset();
  }

  addTeam(team: Team): void {
    this.teamService.addTeam(team);
  }

  name() {
    return this.addTeamForm.get("name");
  }

  sport() {
    return this.addTeamForm.get("sport");
  }

}
