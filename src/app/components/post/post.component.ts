import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any = [];

  constructor(private api: ApiHttpService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  /**
   * getPosts
   */
  public getPosts() {
    this.api.get('https://localhost:7171/api/Posts').subscribe((data) => {
      console.log(data);
      this.posts = data;
    }, (error) => {console.log(error)})
  }

}
