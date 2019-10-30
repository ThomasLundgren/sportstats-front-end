import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { Sport } from "src/app/model/sport.model";
import { ActivatedRoute } from "@angular/router";
import { SportService } from "src/app/service/sport.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-sport",
  templateUrl: "./sport.component.html",
  styleUrls: ["./sport.component.scss"]
})
export class SportComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  sport: Sport = {
    id: 0,
    name: "",
    leagues: []
  };

  constructor(private route: ActivatedRoute, private sportService: SportService) {}

  ngOnInit() {
    this.subscriptions.add(this.route.paramMap.subscribe(params => {
      let sportId = parseInt(params.get("id"));

      this.sportService.getSports().subscribe(sports => {
        let filteredSports = sports.filter(sport => sport.id === sportId);
        if (filteredSports.length !== 0) {
          this.sport = filteredSports.pop();
        }
      });
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
