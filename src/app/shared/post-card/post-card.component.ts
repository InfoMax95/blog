import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;

  public imageExist: boolean = false;

  // responsive variables
  isPhone: boolean = false;
  isTablet: boolean = false;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        // reset variables
        this.isPhone = false;
        this.isTablet = false;

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          console.log("screens matches Handset"); // to debug
          this.isPhone = true;
        } else if (breakpoints[Breakpoints.TabletPortrait]) {
          console.log("Tablet responsive matches") // to debug
          this.isTablet = true;
        }
      });
  }

  public getMainUrlFromPost(post: Post): string {
    let i: number = 0;
    let url: string = "";
    while(i < post.photos.length) {
      let photo = post.photos[i];
      if(photo.isMain) url = photo.url;
      i++;
    };
    if (url == "") url = "../../assets/images/jumbo.jpg"; // default img
    return url;
  }

}
