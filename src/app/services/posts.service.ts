import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: any = [];

  constructor(private api: ApiHttpService) { }

  /**
   * getPosts
   */
  public getPosts() {
    this.api.get('https://localhost:7171/api/Posts').subscribe((res) => {
      console.log(res);
      this.posts = res;
      // return res;
    }, (error) => {
      console.log(error);
      // return error;
    })
  }

  /**
   * getPostById
  */
 data: object = {};
  // public getPostById(index: number): [] {
  //   this.getPosts();
  //   let i = 0;
  //   while(i < this.posts.length) {
  //     if(this.posts[i].id == index) return this.posts[i];
  //     i++;
  //   }
  //   return this.posts;
  // }
  // secondo metodo da controllare perchè non funziona
  public getPostById(index: number): object {
    this.api.get(`https://localhost:7171/api/Posts/${index}`).subscribe((res) => {
      console.log(res);
      this.data = res;
    }, (error) => {
      return error;
    })
    return this.data;
  }
}
