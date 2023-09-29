import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receipt } from '../models/receipt.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AppReceiptsService {

  crudAppApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getReceipts(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>(this.crudAppApiUrl + '/receipts');
  }

  getReceiptById(id: Guid): Observable<Receipt> {
    return this.http.get<Receipt>(this.crudAppApiUrl + `/receipts/${id}`);
  }

  postReceipt(data: Receipt) {
    return this.http.post(this.crudAppApiUrl + 'receipts', data);
  }

  putReceipt(data: Receipt) {
    return this.http.put(this.crudAppApiUrl + '/receipts', data);
  }

  deleteReceipt(id: Guid) {
    return this.http.delete(this.crudAppApiUrl + `/receipts/${id}`);
  }
}
