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
      "gold": "80",
      "silver": "20",
    })
  }

  getFeedbackComments(): Observable<any> {
    //return this.http.get<any>(this.dataUrl);
    return of([
      {
        "name": "Anil Pathuri",
        "employeId": "anpa0923",
        "comment": "comment 1",
        "rating": 4,
        "brageId": 1,
        "technologies": "java,angular"
      },
      {
        "name": "Anil Pathuri",
        "employeId": "anpa0923",
        "comment": "comment 2",
        "rating": 2,
        "brageId": 2,
        "technologies": "java,angular"
      }
    ])
  }

  getVelocityDetails(): Observable<any> {
    //return this.http.get<any>(this.dataUrl);
    return of(
      {
        "totleVelocity": "70",
        "TER": "75",
        "LOE": "25",
        "velocityDataSet": [
          {
            "TMS": 60,
            "TER": 40,
            "label": "2018"
          },
          {
            "TMS": 80,
            "TER": 20,
            "label": "2019"
          },
          {
            "TMS": 50,
            "TER": 50,
            "label": "2020"
          },
          {
            "TMS": 75,
            "TER": 25,
            "label": "2021"
          },
          {
            "TMS": 45,
            "TER": 55,
            "label": "2022"
          },
          {
            "TMS": 35,
            "TER": 65,
            "label": "2023"
          }
        ]
      }
    )
  }

}
