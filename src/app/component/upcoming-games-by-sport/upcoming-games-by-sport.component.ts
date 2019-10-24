import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Season } from "../../model/season.model";
import { SeasonService } from "../../service/season.service";
import { Sport } from "src/app/model/sport.model";

@Component({
  selector: "app-upcoming-games-by-sport",
  templateUrl: "./upcoming-games-by-sport.component.html",
  styleUrls: ["./upcoming-games-by-sport.component.css"]
})
export class UpcomingGamesBySportComponent implements OnChanges {
  @Input() sport: Sport;
  seasons: Season[] = [];

  constructor(private seasonService: SeasonService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["sport"].currentValue.id !== 0) {
      this.sport = changes["sport"].currentValue;
      console.log("Sport received: " + JSON.stringify(changes["sport"].currentValue));
      console.log("Sport set: " + JSON.stringify(this.sport));
    }
  }
}
