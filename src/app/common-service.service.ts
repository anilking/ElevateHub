import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = '/elevatehub';

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

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
    const url = `${this.apiUrl}/users/authenticate`;
    return this.http.post<any>(url, userCredential);
  }

  getSupportScore(): Observable<any> {
    const url = `${this.apiUrl}/supportscore`;
    //return this.http.get<any>(url);
    return this.http.get<any>(url);
  }

  getFeedbackComments(userEmail: string): Observable<any> {
    const url = `${this.apiUrl}/supportscore/${userEmail}`;
    return this.http.get<any>(url);
  //   return of({
  //     "status": "success",
  //     "data": [{
  //         "id": 1,
  //         "employeeId": "prgu0921",
  //         "email": "p@p.com",
  //         "technologies": "Java",
  //         "comment": "helped me o solve",
  //         "rating": 5,
  //         "modifiedAt": "2023-12-17T04:25:12Z",
  //         "createdAt": "2023-11-17T04:24:41Z",
  //         "nominatedUser": null,
  //         "badgeId": 1
  //     }],
  //     "responseTimestamp": "2023-12-17T02:50:38.776+00:00"
  // })
  }

  getVelocityScore(): Observable<any> {
    //return this.http.get<any>(this.dataUrl);
    return of(
      {
        "totleVelocity": "70",
        "TER": "75",
        "LOE": "25",
      }
    )
  }

  getVelocityBarDetails(requestObj: any): Observable<any> {
    const url = `${this.apiUrl}/users/velocity?duration=last2Months`;
    return this.http.get<any>(url);
    // return of(
    //   {
    //     "totleVelocity": "70",
    //     "TER": "75",
    //     "LOE": "25",
    //     "velocityDataSet": [
    //       {
    //         "TMS": 60,
    //         "TER": 40,
    //         "label": "2018"
    //       },
    //       {
    //         "TMS": 80,
    //         "TER": 20,
    //         "label": "2019"
    //       },
    //       {
    //         "TMS": 50,
    //         "TER": 50,
    //         "label": "2020"
    //       },
    //       {
    //         "TMS": 75,
    //         "TER": 25,
    //         "label": "2021"
    //       },
    //       {
    //         "TMS": 45,
    //         "TER": 55,
    //         "label": "2022"
    //       },
    //       {
    //         "TMS": 35,
    //         "TER": 65,
    //         "label": "2023"
    //       }
    //     ]
    //   }
    // )
  }

  sendSupportScore(supportScoreDetails: any): Observable<any> {
    const url = this.apiUrl;
    //return this.http.post<any>(url, supportScoreDetails);

    return of({
      "status": "success",
      })
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }

}
