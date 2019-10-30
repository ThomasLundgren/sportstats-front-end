import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamService } from 'src/app/service/team.service';
import { GameService } from 'src/app/service/game.service';
import { Game } from 'src/app/model/game.model';

@Component({
  selector: 'app-teams-by-sport',
  templateUrl: './teams-by-sport.component.html',
  styleUrls: ['./teams-by-sport.component.scss']
})
export class TeamsBySportComponent implements OnInit, OnChanges, OnDestroy {
  @Input() sportId: number;
  subscriptions = new Subscription();
  teams = null;
  games = null;

  constructor(private teamService: TeamService, private gameService: GameService) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!(this.sportId > 0)){
      this.teams = [];
    }else {
      this.subscriptions.add(this.teamService.getTeamsBySportId(this.sportId).subscribe(data => {
        this.games =  null;
        this.teams = data;
      }));
    }
  }
  ngOnDestroy(): void {
    this.unsubscribeFromSubscriptions();
  }

  unsubscribeFromSubscriptions(): void {
    this.subscriptions.unsubscribe();
    this.subscriptions = new Subscription();
  }
  clickOnTeam(teamId){
    this.gameService.getGamesByHomeTeamId(teamId).subscribe(data => {
      this.games = data;
    });
  }
}
