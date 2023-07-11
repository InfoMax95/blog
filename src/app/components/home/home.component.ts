import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/models/pagination';
import { Post } from 'src/app/models/post';
import { PostParams } from 'src/app/models/postParams';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  pagination: Pagination | undefined;
  postParams: PostParams | undefined;
  post: Post | undefined;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
   this.loadPosts();
  }

  loadPosts() {
    if (!this.postParams) return;
    this.postsService.getPosts(this.postParams).subscribe({
      next: response => {
        if (response.result && response.pagination) {
          this.posts = response.result;
          this.pagination = response.pagination;
        }
      },
      error: err => console.log(err)
    })
  }

}
