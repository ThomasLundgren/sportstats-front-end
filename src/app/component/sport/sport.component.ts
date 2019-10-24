import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Sport } from "src/app/model/sport.model";
import { ActivatedRoute } from "@angular/router";
import { SportService } from "src/app/service/sport.service";

@Component({
  selector: "app-sport",
  templateUrl: "./sport.component.html",
  styleUrls: ["./sport.component.scss"]
})
export class SportComponent implements OnInit {
  sport: Sport = {
    id: 0,
    name: "",
    leagues: []
  };

  constructor(private route: ActivatedRoute, private sportService: SportService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let sportId = parseInt(params.get("id"));

      this.sportService.getSports().subscribe(sports => {
        let filteredSports = sports.filter(sport => sport.id === sportId);
        if (filteredSports.length !== 0) {
          this.sport = filteredSports.pop();
        }
      });
    });
  }
}
