import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeagueService } from 'src/app/service/league.service';
import { Sport } from 'src/app/model/sport.model';
import { SportService } from 'src/app/service/sport.service';

@Component({
  selector: 'app-admin-add-season',
  templateUrl: './admin-add-season.component.html',
  styleUrls: ['./admin-add-season.component.scss']
})
export class AdminAddSeasonComponent implements OnInit {

  sports: Sport[] = [];

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

  getLeagues() {
    this.sports.forEach(sport => {
      this.leagueService.getLeaguesBySportId(sport.id).subscribe(data => {
        sport.leagues = data;
      });
    });
  }

  onSubmit() {
    console.log(this.addSeasonForm.value);
    //this.addSeasonForm.controls.name.reset();
  }

}
