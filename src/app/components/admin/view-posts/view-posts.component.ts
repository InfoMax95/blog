import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'content', 'action'];
  dataSource: any = [];

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
      this.dataSource = data;
    }, (error) => {console.log(error)})
  }

}
