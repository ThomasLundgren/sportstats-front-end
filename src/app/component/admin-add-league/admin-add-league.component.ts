import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/service/sport.service';
import { Sport } from 'src/app/model/sport.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-add-league',
  templateUrl: './admin-add-league.component.html',
  styleUrls: ['./admin-add-league.component.scss']
})
export class AdminAddLeagueComponent implements OnInit {

  sports: Sport[] = [];
  addLeagueForm = new FormGroup({
    name: new FormControl(''),
    sport: new FormControl(''),
  });

  constructor(private sportService: SportService) { }

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports().subscribe(data => {
      this.sports = data;
      this.addLeagueForm.reset();
    });
  }

  onSubmit() {
    this.addLeagueForm.controls.name.reset();
  }

}
