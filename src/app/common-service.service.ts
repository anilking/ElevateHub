import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // GET operation to fetch data
  getData(): Observable<any[]> {
    const url = this.apiUrl;
    return this.http.get<any[]>(url);
  }

  // POST operation to add data
  addData(data: any): Observable<any> {
    const url = this.apiUrl;
    return this.http.post<any>(url, data);
  }

  checkLogin(userCredential: any): Observable<any> {
    const url = this.apiUrl;
    return this.http.post<any>(url, userCredential);
  }

}
