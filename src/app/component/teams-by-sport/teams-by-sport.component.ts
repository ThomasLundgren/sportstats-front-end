import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-teams-by-sport',
  templateUrl: './teams-by-sport.component.html',
  styleUrls: ['./teams-by-sport.component.scss']
})
export class TeamsBySportComponent implements OnInit, OnChanges, OnDestroy {
  @Input() sportId: number;
  subscriptions = new Subscription();
  teams = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
 
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if (!(this.sportId > 0)){

      this.teams = [];
    }else {
      this.subscriptions.add(this.teamService.getTeamsBySportId(this.sportId).subscribe(data => {
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
}
