import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class NotificationService<T> {
  private subject: Subject<T> = new Subject();

  readonly notifier: Observable<T> = this.subject.asObservable();

  constructor() { }

  notify(value: T) {
    this.subject.next(value);
  }
}
