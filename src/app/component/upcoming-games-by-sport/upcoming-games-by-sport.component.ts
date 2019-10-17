import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../model/season.model';
import { SeasonService } from '../../service/season.service';

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
