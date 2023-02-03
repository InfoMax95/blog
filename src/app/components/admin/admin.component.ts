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

  posts: any = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.dataSource = this.postService.getPosts();
    console.log(this.posts);
    console.log(this.dataSource);
  }

}
