import { Component, OnInit, ViewChild } from '@angular/core';
import { Sport } from 'src/app/model/sport.model';
import { League } from 'src/app/model/league.model';
import { Season } from 'src/app/model/season.model';
import { SportService } from 'src/app/service/sport.service';
import { LeagueService } from 'src/app/service/league.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-admin-add-round',
  templateUrl: './admin-add-round.component.html',
  styleUrls: ['./admin-add-round.component.scss']
})
export class AdminAddRoundComponent implements OnInit {

  sports: Sport[] = [];
  leagues: League[] = [];
  seasons: Season[] = [];

  addRoundForm = new FormGroup({

  });

  constructor(
    private sportService: SportService,
    private leagueService: LeagueService,
    private seasonService: SeasonService
  ) { }

  ngOnInit() {
    this.getSports();
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

  getSeasonByLeagueId(leagueId: number): void{
    this.seasonService.getSeasonsByLeagueId(leagueId).subscribe(data => {
      this.seasons = data;
    })
  }

  onSubmit(): void {
    this.addRoundForm.controls.roundLimit.reset();
    //this.addSeasonForm.controls.startDate.reset();
    //this.addSeasonForm.controls.endDate.reset();
  }

  onReset(): void {
    this.sports = [];
    this.leagues = [];
    this.seasons = [];
  }

  sportChanged(sportId: number): void {
    this.getLeaguesBySportId(sportId);
    this.leagues = [];
    this.seasons = [];
  }

  leagueChanged(leagueId: number): void {
    this.getSeasonByLeagueId(leagueId);
    this.seasons = [];
  }

}
