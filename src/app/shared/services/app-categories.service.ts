import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AppCategoriesService {

  crudAppApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.crudAppApiUrl + '/categories');
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(this.crudAppApiUrl + `/categories/${id}`);
  }

  postCategory(data: Category) {
    return this.http.post(this.crudAppApiUrl + '/categories', data);
  }

  putCategory(data: Category) {
    return this.http.put(this.crudAppApiUrl + '/categories', data);
  }

  deleteCategory(id: string) : Observable<Category> {
    const requestBody = {id: id};
    return this.http.delete<Category>(this.crudAppApiUrl + `/categories/`, {body: requestBody});
  }
}
