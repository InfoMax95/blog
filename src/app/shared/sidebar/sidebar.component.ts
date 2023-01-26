import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // items for menù
  items: string[] = [
    "Home", "Video", "Contact", "About"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
