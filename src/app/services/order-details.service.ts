import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http: HttpClient) { }
  getAllOrder(): Observable<Order[]>{
    return this.http.get<Order[]>("dataSource/fooditem.json");
  }
}
