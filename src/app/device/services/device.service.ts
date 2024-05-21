import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  list(page: any, limit: any) {
    let prm: HttpParams = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get(`${this.baseUrl}/device`, { params: prm, observe: 'response' });
  }
}
