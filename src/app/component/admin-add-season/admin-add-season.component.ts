import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeagueService } from 'src/app/service/league.service';
import { Sport } from 'src/app/model/sport.model';
import { SportService } from 'src/app/service/sport.service';
import { ConsoleReporter } from 'jasmine';
import { League } from 'src/app/model/league.model';

@Component({
  selector: 'app-admin-add-season',
  templateUrl: './admin-add-season.component.html',
  styleUrls: ['./admin-add-season.component.scss']
})
export class AdminAddSeasonComponent implements OnInit {

  sports: Sport[] = [];
  leagues: League[] = [];

  addSeasonForm = new FormGroup({
    leagueId: new FormControl(''),
    roundLimit: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  constructor(private sportService: SportService, private leagueService: LeagueService) { }

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports().subscribe(data => {
      this.sports = data;
    });
  }

  getLeaguesBySportId(sportId) {
    this.leagueService.getLeaguesBySportId(sportId).subscribe(data => {
      this.leagues = data;
    });
  }

  onSubmit() {
    this.addSeasonForm.controls.roundLimit.reset();
    //this.addSeasonForm.controls.startDate.reset();
    //this.addSeasonForm.controls.endDate.reset();
  }

  onReset() {
    this.leagues = [];
  }

  sportChanged(sportId){
    this.getLeaguesBySportId(sportId);
  }

}
