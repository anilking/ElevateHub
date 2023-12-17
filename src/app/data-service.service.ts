import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userDetailsSubject = new BehaviorSubject<any>({});
  public userDetails$ = this.userDetailsSubject.asObservable();

  private trigerSubject = new BehaviorSubject<any>({});
  public trigerSubject$ = this.userDetailsSubject.asObservable();

  public queryObj: any = {};

  constructor() { }

  updateUserDetails(newValue: string): void {
    this.userDetailsSubject.next(newValue);
  }

  updateTriger(newValue: any){
    this.trigerSubject.next({...this.queryObj, ...newValue});
  }
}
