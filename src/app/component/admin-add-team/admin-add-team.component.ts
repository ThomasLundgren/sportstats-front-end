import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/service/team.service';
import { Team } from 'src/app/model/team.model';

@Component({
  selector: 'app-admin-add-team',
  templateUrl: './admin-add-team.component.html',
  styleUrls: ['./admin-add-team.component.scss']
})
export class AdminAddTeamComponent implements OnInit {

  addTeamForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  onSubmit(){
    //addSport(team);
    this.addTeamForm.reset();
  }

  addSport(team: Team): void {
    //TODO: Implement addTeam in service class
    //this.teamService.addTeam(team);
  }

}
