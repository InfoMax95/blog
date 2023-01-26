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
      value: "/homepage"
    }, 
    {
      name: "Video",
      value: "/video"
    }, 
    {
      name: "Contact",
      value: "/contact"
    }, 
    {
      name: "About",
      value: "/homepage"
    }, 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
