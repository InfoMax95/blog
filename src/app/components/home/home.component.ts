import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: any = [];

  constructor(private api: ApiHttpService) { }

  ngOnInit(): void {
   this.getPosts();
  }

  /**
   * getPosts
   */
   public getPosts() {
    this.api.get(`https://localhost:7171/api/Posts`).subscribe({
      next: (response) => {
        console.log(response);
        this.posts = response;
      },
      error: err => console.log(err),
    })
  }
}
