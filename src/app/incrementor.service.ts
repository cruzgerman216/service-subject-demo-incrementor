import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncrementorService {
  count:number = 0; 
  countSubject = new Subject<number>()
  constructor() { }

  incrementCount(){
    this.count++;
    // Broadcast
    this.countSubject.next(this.count)
  }

  
}
