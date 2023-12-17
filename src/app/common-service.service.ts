import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = '/elevatehub';

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  public  updateScore: BehaviorSubject<any> = new BehaviorSubject<any>(null);

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


  submitSupportScore(data:any): Observable<any> {
    const url = `${this.apiUrl}/supportscore`;
    //return this.http.get<any>(url);
    return this.http.post<any>(url, data);
  }

  getSupportScore(): Observable<any> {
    const url = `${this.apiUrl}/supportscore`;
    return this.http.get<any>(url);
  }

  getFeedbackComments(userEmail: string): Observable<any> {
    const url = `${this.apiUrl}/supportscore/${userEmail}`;
    return this.http.get<any>(url);
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

  getVelocityBarDetails(requestObj: string): Observable<any> {
    let url = `${this.apiUrl}/users/velocity?${requestObj}`;

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

  getUsersList(): Observable<any> {
    const url = `${this.apiUrl}/users`;
    return this.http.get<any>(url);
  }

}
