import { Component, OnInit } from '@angular/core';
import { Sport } from 'src/app/model/sport.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  sportId: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sportId = params.get('id');
      console.log(this.sportId);
    } );
  }

}
