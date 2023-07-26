import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginatedResult } from '../models/pagination';
import { Post } from '../models/post';
import { PostParams } from '../models/postParams';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string = environment.apiUrl;
  posts: Post[] = [];
  postCache = new Map();

  constructor(private http: HttpClient) { }

  /**
   * @method getPost
   * @summary call base url adding posts
   * @return array di post
   */
  public getPosts(postParams: PostParams) {
    const response = this.postCache.get(Object.values(postParams).join("-"));
    if (response) return of(response);
    let params = this.getPaginationHeader(postParams.pageNumber, postParams.pageSize);

    // const elements = postParams.type.join("-");
    // params = params.append("type", postParams.type);

    return this.getPaginatedResult<Post[]>(this.baseUrl + "posts", params).pipe(
      map(response => {
        this.postCache.set(Object.values(postParams).join("-"), response);
        return response;
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
    const post = [...this.postCache.values()]
    .reduce((arr, elem) => arr.concat(elem.result), [])
    .find((post: Post) => post.id === index);

    if(post) return of(post);
    return this.http.get<Post>(`${this.baseUrl}posts/${index}`);
  }

  // private methods section

  private getPaginatedResult<T>(url: string, params: HttpParams) {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    return this.http.get<T>(url, { observe: "response", params }).pipe(
      map(response => {
        if (response.body) {
          paginatedResult.result = response.body;
        }
        const pagination = response.headers.get("Pagination");
        if (pagination) {
          paginatedResult.pagination = JSON.parse(pagination);
        }
        return paginatedResult;
      })
    );
  }

  private getPaginationHeader(pageNumber: number, pageSize: number) {
    let params = new HttpParams();

    params = params.append("pageNumber", pageNumber);
    params = params.append("pageSize", pageSize);

    return params;
  }
}
