import { Component } from '@angular/core';
import { GetSportsService } from './service/get-sports-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sportstats-front-end';

  constructor(private service: GetSportsService) { }

  ngOnInit() {
    this.service.getSports()
    .subscribe( data => { this.service.setUsers(data); console.log(data); });
  }

}
