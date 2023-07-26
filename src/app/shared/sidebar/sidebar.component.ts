import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
      name: "About",
      value: "about"
    },
    {
      name: "Apps",
      value: "apps"
    },
  ];

  // responsive variables
  isPhone: boolean = false;
  isTablet: boolean = false;
  isPc: boolean = false;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        // reset variables
        this.isPhone = false;
        this.isTablet = false;
        this.isPc = false;

        if (breakpoints[Breakpoints.Handset]) {
          console.log("screens matches Handset"); // to debug
          this.isPhone = true;
        } else if (breakpoints[Breakpoints.Tablet]) {
          console.log("Tablet responsive matches") // to debug
          this.isTablet = true;
        }
      });
  }
}
