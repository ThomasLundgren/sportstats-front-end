import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SportService } from 'src/app/service/sport.service';
import { Sport } from 'src/app/model/sport.model';

@Component({
  selector: 'app-admin-add-sport',
  templateUrl: './admin-add-sport.component.html',
  styleUrls: ['./admin-add-sport.component.scss']
})
export class AdminAddSportComponent implements OnInit {

  addSportForm = new FormGroup({
    name: new FormControl(''),
  });
  
  constructor(private sportService: SportService) {}

  ngOnInit() {

  }

  onSubmit(): void {
    var sport = new Sport();
    sport.name = this.addSportForm.controls.name.value;
    this.addSport(sport);
    this.addSportForm.reset();
  }

  addSport(sport: Sport): void {
    this.sportService.addSport(sport);
  }

}
