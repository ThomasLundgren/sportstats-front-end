import { Component } from '@angular/core';
import { GetSportsService } from './service/get-sports-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sportstats-system';

  constructor(private service: GetSportsService) { }

  ngOnInit() {
    this.service.getSports()
    .subscribe( data => { this.service.setSports(data); console.log(data); });
  }

}
