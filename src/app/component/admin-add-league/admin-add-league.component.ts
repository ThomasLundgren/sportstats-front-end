import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/service/sport.service';
import { Sport } from 'src/app/model/sport.model';

@Component({
  selector: 'app-admin-add-league',
  templateUrl: './admin-add-league.component.html',
  styleUrls: ['./admin-add-league.component.scss']
})
export class AdminAddLeagueComponent implements OnInit {

  sports: Sport[] = [];

  constructor(private sportService: SportService) {
    
   }

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports().subscribe(data => {
      this.sports = data;
    });
  }

}
