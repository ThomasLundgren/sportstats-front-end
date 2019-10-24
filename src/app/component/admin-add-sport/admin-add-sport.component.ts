import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-add-sport',
  templateUrl: './admin-add-sport.component.html',
  styleUrls: ['./admin-add-sport.component.scss']
})
export class AdminAddSportComponent implements OnInit {

  addSportForm = new FormGroup({
    name: new FormControl(''),
  });
  
  constructor() {}

  ngOnInit() {

  }

  onSubmit(): void {
    this.addSportForm.reset();
  }

}
