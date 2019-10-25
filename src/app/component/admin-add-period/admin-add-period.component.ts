import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-add-period',
  templateUrl: './admin-add-period.component.html',
  styleUrls: ['./admin-add-period.component.scss']
})
export class AdminAddPeriodComponent implements OnInit {

  addPeriodForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
