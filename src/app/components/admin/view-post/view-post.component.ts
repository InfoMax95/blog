import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  public post: any;

  public id: number;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    // Get parameter from routing
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = +params.get('id')!;
      console.log(this.id);
      this.post = this.postService.getPostById(this.id);
    });
  }

}
