import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ListProducts } from '../models/product';
import { Response } from '../models/response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ApiUrl = environment.urlAPI;

  constructor(private http : HttpClient) { }

  GetProducts(): Observable<Response<ListProducts[]>>
  {
    return this.http.get<Response<ListProducts[]>>(this.ApiUrl);
  }

  DeleteProduct(id:number | undefined) : Observable<Response<ListProducts[]>>{
    return this.http.delete<Response<ListProducts[]>>(`${this.ApiUrl}?id=${id}`);
  }

  CreateProduct(product: ListProducts) : Observable<Response<ListProducts[]>>{
    return this.http.post<Response<ListProducts[]>>(this.ApiUrl, product);
  }

  GetProductId(id:number):Observable<Response<ListProducts>>{
    return this.http.get<Response<ListProducts>>(`${this.ApiUrl}/${id}`)
  }

  EditProduct(product:ListProducts):Observable<Response<ListProducts[]>>{
    return this.http.put<Response<ListProducts[]>>(this.ApiUrl, product);
  }

}
