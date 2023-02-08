import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'content', 'action'];
  dataSource: any = [];

  constructor(private postService: PostsService, private api: ApiHttpService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public getPosts() {
    this.api.get('https://localhost:7171/api/Posts').subscribe((res) => {
      console.log(res);
      this.dataSource = res;
    }, (error) => {
      console.log(error);
    })
  }

}
