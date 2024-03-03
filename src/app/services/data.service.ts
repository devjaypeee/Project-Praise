import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://tapinac-shs.info/raise-api';

  apiRequest(method: string, data: any) {
    return this.http.post(this.apiUrl + method, data);
  }
}
