import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private dataUrl = 'assets/jsons/supportScore.json';

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
    //return this.http.post<any>(url, userCredential);

    return of({
      "name": "Anil Pathuri",
      "employeId": "anpa0923",
      "role": "Senior Software Engineer"
    })
  }

  getSupportScore(): Observable<any> {
    //return this.http.get<any>(this.dataUrl);
    return of({
      "currentScore": "4.8",
      "gold": "50",
      "silver": "50",
    })
  }

}
