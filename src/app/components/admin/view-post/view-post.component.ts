import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  element: any = {};

  public id: number;

  constructor(
    private route: ActivatedRoute,
    //private postService: PostsService,
  ) { }

  ngOnInit(): void {
    // Get parameter from routing
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = +params.get('id')!;
      console.log(this.id);
      // this.getPostByID(this.id);
    });
  }

  /**
   * method to get single post
   */
  // private getPostByID(index:number) {
  //   this.api.get(`https://localhost:7171/api/Posts/${index}`).subscribe((res) => {
  //     console.log(res);
  //     this.element = res;
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }

}
