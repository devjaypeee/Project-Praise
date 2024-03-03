import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://srv544-files.hstgr.io/48fbb937866a3a34/files/public_html/raise-api/';

  apiRequest(method: string, data: any) {
    return this.http.post(this.apiUrl + method, data);
  }
}
