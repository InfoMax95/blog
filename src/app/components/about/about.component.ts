import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // responsive variables
  isPhone: boolean = false;
  isTablet: boolean = false;
  isPc: boolean = false;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        // reset variables
        this.isPhone = false;
        this.isTablet = false;
        this.isPc = false;

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens matches Handset"); // to debug
          this.isPhone = true;
        } else if (breakpoints[Breakpoints.TabletPortrait]) {
          console.log("Tablet responsive matches") // to debug
          this.isTablet = true;
        }
      });
  }

}
