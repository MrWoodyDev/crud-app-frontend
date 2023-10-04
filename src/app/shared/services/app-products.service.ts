import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
import { PaginationResponse } from '../models/paginator-response.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AppProductsService {

  crudAppApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getProducts(pageNumber: number, pageSize: number, categoryId: string) : Observable<PaginationResponse<Product>> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('categoryId', categoryId);
    return this.http.get<PaginationResponse<Product>>(this.crudAppApiUrl + '/products', {params});
  }

  getProductById(id: Guid): Observable<Product> {
    return this.http.get<Product>(this.crudAppApiUrl + `/products/${id}`);
  }

  postProduct(data: Product) {
    return this.http.post(this.crudAppApiUrl + '/products', data);
  }

  putProduct(data: Product) {
    return this.http.put(this.crudAppApiUrl + '/products', data);
  }

  deleteProduct(id: Guid) {
    return this.http.delete(this.crudAppApiUrl + `/products/${id}`);
  }
}
