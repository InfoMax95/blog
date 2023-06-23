import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  homeForm: FormGroup;

  public id: number;

  public post: any = {};

  constructor(
    private route: ActivatedRoute,
    //private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = +params.get('id')!;
      console.log(this.id);
      // this.getPostByID(this.id);
    });
    this.homeForm = new FormGroup({
      id : new FormControl(this.id, Validators.required),
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
    let fieldValue = this.homeForm.value;
    console.log(fieldValue);
    // this.onUpdate(this.id, fieldValue);
    //this.createPost();
  }

  /**
   * method to get single post
   */
  //  private getPostByID(index:number) {
  //   this.api.get(`https://localhost:7171/api/Posts/${index}`).subscribe((res) => {
  //     console.log(res);
  //     this.post = res;
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }

  /**
   * update post
   */
  // private onUpdate(index: number, data: object) {
  //   this.api.put(`https://localhost:7171/api/Posts/${index}`, data).subscribe((res) => {
  //     this.getPostByID(index);
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }
}
