import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  homeForm: FormGroup;

  constructor(private api: ApiHttpService) { }

  ngOnInit(): void {
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
    this.createPost();
  }

  /**
   * createPost
   */
  public createPost() {
    let fieldValue = this.homeForm.value;
    console.log(fieldValue);
    let data = {
      "id": 0,
      "title": "string",
      "content": "string",
      "subtitle": "string",
      "description": "string",
      "authorID": 0,
      "created_At": "2023-02-02T13:33:16.830Z",
      "updated_At": "2023-02-02T13:33:16.830Z"
    }
    this.api.post('https://localhost:7171/api/Posts', fieldValue).subscribe((res) => {
      console.log(res);
      this.homeForm.reset();
    }, (error) => {
      console.log(error)
    })
  }

}
