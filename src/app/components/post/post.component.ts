import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  existImage: boolean = false;
  imageFirstContentExist: boolean = false;
  imageSecondContentExist: boolean = false;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.getIdByRoute();
  }

  public getMainUrlFromPost(post: Post): string {
    let i: number = 0;
    let url: string = "";
    while(i < post.photos.length) {
      let photo = post.photos[i];
      if(photo.isMain) url = photo.url;
      i++;
    };
    if (url == "") url = "../../assets/images/jumbo.jpg"; // default img
    return url;
  }

  public getFirstImage(post: Post): string {
    let i: number = 0;
    let url: string = post.photos[1].url;
    if (url == "") url = "../../assets/images/jumbo.jpg"; // default img
    return url;
  }
  public getSecondImage(post: Post): string {
    let i: number = 0;
    let url: string = post.photos[2].url;
    if (url == "") url = "../../assets/images/jumbo.jpg"; // default img
    return url;
  }
  public getThirdImage(post: Post): string {
    let i: number = 0;
    let url: string = post.photos[3].url;
    if (url == "") url = "../../assets/images/jumbo.jpg"; // default img
    return url;
  }

  private getIdByRoute() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      const id = +params.get('id')!;
      this.getPostById(id);
    });
  }

  private getPostById(index: number) {
    this.postsService.getPostById(index).subscribe({
      next: res => {
        this.post = res;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
