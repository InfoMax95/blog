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

  constructor() { }

  ngOnInit(): void {
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
