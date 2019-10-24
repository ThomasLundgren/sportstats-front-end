import { Component, OnInit } from '@angular/core';
import { faUserPlus, faUserEdit, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  faUserPlus = faUserPlus;
  faUserEdit = faUserEdit;
  faUserCog = faUserCog;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setActiveClass(event) {

    var list = document.getElementById("adminUL");
    var anchors = list.getElementsByTagName("a");
    var arr = [].slice.call(anchors);

    arr.forEach(e => {
      e.classList.remove("active");
    });
    
    event.currentTarget.classList.add("active");

  }

}
