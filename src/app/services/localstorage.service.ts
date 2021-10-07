import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private storageSub= new Subject<string>();
  constructor() { }
  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any) {
  localStorage.setItem(key,data);
    this.storageSub.next('added');
  }
  getItem(key: string) {
   return localStorage.getItem(key);
  }

  removeItem(key: any) {
    localStorage.removeItem(key);
    this.storageSub.next('removed');
  }
}
