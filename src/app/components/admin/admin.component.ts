import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'content', 'action'];
  dataSource: any = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  public getPosts() {
    // this.api.get('https://localhost:7171/api/Posts').subscribe((res) => {
    //   console.log(res);
    //   this.dataSource = res;
    // }, (error) => {
    //   console.log(error);
    // })
  }

  /**
   * delete record from db
   */
  public onDelete(id: number) {
    console.log(id);
    // this.deleteRec(id);
  }

  /**
   * function to delete
   */
  // private deleteRec(value: number): void {
  //   this.api.delete(`https://localhost:7171/api/Posts/${value}`).subscribe((res) => {
  //     this.getPosts();
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }
}
