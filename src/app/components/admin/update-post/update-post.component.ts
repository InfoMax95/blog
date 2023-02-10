import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  homeForm: FormGroup;

  public id: number;

  public post: any;

  constructor(private api: ApiHttpService,private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = +params.get('id')!;
      console.log(this.id);
      this.post = this.postService.getPostById(this.id);
    });
    this.homeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      subtitle: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      authorID: new FormControl(1, Validators.required),
      created_at: new FormControl(new Date(), Validators.required),
      updated_at: new FormControl(new Date(), Validators.required),
    });
  }

  onSubmit() {
    console.log(this.homeForm);
    //this.createPost();
  }

  /**
   * create formcGroup
   */
  private createForm() {
    this.homeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      subtitle: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      authorID: new FormControl(1, Validators.required),
      created_at: new FormControl(new Date(), Validators.required),
      updated_at: new FormControl(new Date(), Validators.required),
    });
  }

  /**
   * createPost
   */
  public createPost() {
  }

}
