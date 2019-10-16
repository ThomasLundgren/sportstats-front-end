import { Component, OnInit, Input } from '@angular/core';
import { Sport } from '../../model/sport.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() sports: Sport[];

  constructor() { }

  ngOnInit() {
  }

}
