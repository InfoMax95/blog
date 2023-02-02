import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-big-card',
  templateUrl: './post-big-card.component.html',
  styleUrls: ['./post-big-card.component.scss']
})
export class PostBigCardComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
  }

}
