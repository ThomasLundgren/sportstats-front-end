import { Component, OnInit } from '@angular/core';
import { faPlusSquare, faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faUserEdit = faUserEdit;

  constructor() { }

  ngOnInit() {
  }

}
