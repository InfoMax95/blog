import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: any;

  public imageExist: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.post.posts); // to debug
    console.log(this.post.posts.created_At); // to debug
    let date = new Date(this.post.posts.created_At); // to debug
    date.toDateString();
    console.log(date);
    var dateParts = this.post.posts.created_At.split("-");
    var jsDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2));
    jsDate.toDateString();
    console.log(`${jsDate.getDay()}-${jsDate.getMonth()}-${jsDate.getFullYear()}`);
  }

}
