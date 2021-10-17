import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  formValid$ = new Subject<boolean>();

  constructor() { }

  setFormValidValue(valid: boolean) {
    this.formValid$.next(valid);
  }

  getFormValidValue(): Observable<boolean> {
    return this.formValid$.asObservable();
  }
}
