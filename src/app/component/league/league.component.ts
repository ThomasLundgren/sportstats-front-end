import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/service/league.service';
import { League } from 'src/app/model/league.model';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  league: League = {
    name: '',
    id: 0,
    sportId: 0,
    seasons: []
  };

  constructor(private route:ActivatedRoute, private leagueService: LeagueService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.leagueService.getLeagueById(params.get('id')).subscribe(data => {
        console.log(data);
        this.league = data;
      });
    });
  }
}
