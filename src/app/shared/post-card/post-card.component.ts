import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.post.id)
  }

}
