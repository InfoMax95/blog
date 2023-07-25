import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/models/pagination';
import { Post } from 'src/app/models/post';
import { PostParams } from 'src/app/models/postParams';
import { Type } from 'src/app/models/type';
import { PostsService } from 'src/app/services/posts.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  filteredPosts: Post[] = [];
  pagination: Pagination | undefined;
  postParams: PostParams | undefined = {
    pageNumber: 1,
    pageSize: 3,
    type: "All"
  };

  checkboxes: any | undefined;
  types: Type[] = [];
  selectedTypes: string[] = [];

  constructor(private postsService: PostsService, private typeService: TypeService) { }

  ngOnInit(): void {
   this.loadPosts();
   this.getTypes();
  }

  public eventCheck(event: Event) {
    const el: HTMLInputElement = event.target as HTMLInputElement;
    const element: string = el.value;
    if (!this.selectedTypes.includes(element)) this.selectedTypes.push(element);
    else this.selectedTypes = this.selectedTypes.filter((type: string) => {
      return type !== element;
    })
    this.filterPosts(this.selectedTypes);
  }

  private filterPosts(array: string[]) {
    this.filteredPosts = this.posts.filter((post: Post) => {
      if (array.includes(post.type)) return post;
      else return;
    })
  }

  private loadPosts() {
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

  private getTypes() {
    this.typeService.getTypes().subscribe({
      next: res => {
        this.types = res;
      },
      error: err => console.log(err)
    })
  }



}
