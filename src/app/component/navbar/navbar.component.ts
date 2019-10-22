import { Component, OnInit, Input } from '@angular/core';
import { Sport } from '../../model/sport.model';
import { faHome, faUserCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() sports: Sport[];
  faHome = faHome;
  faUserCog = faUserCog;

  constructor() { }

  ngOnInit() {
  }

}
