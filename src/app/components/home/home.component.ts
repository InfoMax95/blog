import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
   this.posts$ = this.postsService.getPosts();
   console.log(this.posts$); // to debug
  }

}
