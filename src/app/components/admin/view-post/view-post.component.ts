import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

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
