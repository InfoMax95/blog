import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/type';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent implements OnInit {

  checkboxes: any | undefined;
  types: Type[] = [];

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  private getTypes() {
    this.typeService.getTypes().subscribe({
      next: res => {
        console.log(res);
        this.types = res;
      },
      error: err => console.log(err)
    })
  }

}
