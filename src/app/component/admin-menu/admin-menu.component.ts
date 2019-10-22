import { Component, OnInit } from '@angular/core';
import { faUserPlus, faUserEdit, faUserCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  faUserPlus = faUserPlus;
  faUserEdit = faUserEdit;
  faUserCog = faUserCog;

  constructor() { }

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
