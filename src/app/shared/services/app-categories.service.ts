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

  getCategoryById(id: Guid): Observable<Category> {
    return this.http.get<Category>(this.crudAppApiUrl = `/categories/${id}`);
  }

  postCategory(data: Category) {
    return this.http.post(this.crudAppApiUrl + '/categories', data);
  }

  deleteCategory(id: Guid) {
    return this.http.delete(this.crudAppApiUrl + `/categories/${id}`);
  }
}
