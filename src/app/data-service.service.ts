import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userDetailsSubject = new BehaviorSubject<any>({});
  public userDetails$ = this.userDetailsSubject.asObservable();

  constructor() { }

  updateUserDetails(newValue: string): void {
    this.userDetailsSubject.next(newValue);
  }
}
