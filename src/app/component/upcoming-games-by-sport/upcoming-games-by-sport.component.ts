import { Component, OnInit, Input } from '@angular/core';
import { Season } from 'src/app/model/season.model';
import { ActivatedRoute } from '@angular/router';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-upcoming-games-by-sport',
  templateUrl: './upcoming-games-by-sport.component.html',
  styleUrls: ['./upcoming-games-by-sport.component.css']
})
export class UpcomingGamesBySportComponent implements OnInit {
  @Input() sportId: number;
  seasons: Season[] = [];
  
  constructor(private seasonService: SeasonService) { }

  ngOnInit() {
    this.seasons = this.seasonService.getSeasonsBySportId(this.sportId);
  }

}
