import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string = environment.apiUrl;
  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  /**
   * @method getPost
   * @summary call base url adding posts
   * @return array di post
   */
  public getPosts() {
    return this.http.get<Post[]>(this.baseUrl + "posts").pipe(
      map(posts => {
        this.posts = posts;
        return posts;
      })
    );
  }

  /**
   * @param index
   * @method getPostById
   * @summary post with id = index
   * @returns Post
  */
  public getPostById(index: number) {
    const post = this.posts.find(x => x.id == index);
    if(post) return of(post);
    return this.http.get<Post>(`${this.baseUrl}posts/${index}`);
  }
}
