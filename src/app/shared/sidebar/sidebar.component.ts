import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // items for menù
  items: any = [
    {
      name: "Home",
      value: "homepage"
    },
    {
      name: "Contact",
      value: "contact"
    },
    {
      name: "About",
      value: "about"
    },
    {
      name: "Apps",
      value: "apps"
    },
    // {
    //   name: "Admin",
    //   value: "admin"
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
