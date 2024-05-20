import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  list(page: any, limit: any) {
    let prm: HttpParams = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get(`${this.baseUrl}/emps`, { params: prm, observe: 'response' });
  }
}