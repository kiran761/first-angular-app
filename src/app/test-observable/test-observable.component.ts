import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
  invoke() {
    let observable: Observable<Object> = this.createObservable();
    this.subscribeToObservable(observable);
  }
 
  // Method to create the Observable
  createObservable(): Observable<Object> {
    return new Observable((obs) => {
 
      setTimeout(() => {
        obs.next('Hello1');
      }, 1000);
 
      setTimeout(() => {
        obs.next('Hello2');
      }, 2000);
 
      setTimeout(() => {
        obs.next('Hello3');
      }, 3000);
 
      setTimeout(() => {
        obs.next('Hello4');
        obs.complete();
      }, 4000);
 
    });
  }

  subscribeToObservable(observable: Observable<Object>) {
    observable.subscribe({
      next(value) {
        console.log('Received:', value);
      },
      error(err) {
        console.error('Error:', err);
      },
      complete() {
        console.log('Observable complete');
      }
    });
  }

}
