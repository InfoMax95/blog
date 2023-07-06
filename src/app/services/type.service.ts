import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  baseUrl: string = environment.apiUrl;
  types: Type[] = [];

  constructor(private http: HttpClient) { }

  public getTypes() {
    return this.http.get<Type[]>(`${this.baseUrl}types`).pipe(
      map( types => {
        this.types = types;
        return types;
      })
    );
  }
}
