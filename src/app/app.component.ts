import { Component, OnInit } from "@angular/core";
import { SportService } from "./service/sport.service";
import { Sport } from "./model/sport.model";
import { LeagueService } from "./service/league.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Sportstats";
  sports: Sport[] = [];

  constructor(private sportService: SportService, private leagueService: LeagueService) {}

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports().subscribe(data => {
      this.sports = data;
      this.setLeagues();
    });
  }

  setLeagues() {
    this.sports.forEach(sport => {
      this.leagueService.getLeaguesBySportId(sport.id).subscribe(data => {
        sport.leagues = data;
      });
    });
  }
}
