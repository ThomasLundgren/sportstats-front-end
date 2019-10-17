import { Component, OnInit } from '@angular/core';
import { GetSportsService } from './service/get-sports-service.service';
import { Sport } from './model/sport.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sportstats';
  sports: Sport[] = [];
 
  constructor(private getSportsService: GetSportsService) { }

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.getSportsService.getSports()
      .subscribe(data => {
        this.sports = data;
        console.log(data);
      });
  }

}
