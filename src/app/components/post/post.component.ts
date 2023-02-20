import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any = {};

  existImage: boolean = false;
  imageFirstContentExist: boolean = false;
  imageSecondContentExist: boolean = false;

  public id: number;

  constructor( private route: ActivatedRoute,private api: ApiHttpService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = +params.get('id')!;
      console.log(this.id);
      this.getPostByID(this.id);
    });
  }

  /**
   * method to get single post
   */
   private getPostByID(index:number) {
    this.api.get(`https://localhost:7171/api/Posts/${index}`).subscribe((res) => {
      this.post = res;
      console.log(this.post);
    }, (error) => {
      console.log(error);
    })
  }

}
