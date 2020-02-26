import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';

import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;


  constructor() {
  }

  ngOnInit() {
    /*this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log('built-in: '+count);
    });*/

    const customIntervalObservable = Observable.create((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count > 2 ){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count > 3'));
        }
        count++
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.pipe(map((data:number)=>{
        return data + 2;
      })).subscribe(
        (data)=>{
          console.log('custom: '+data);
        }, (error) => {
          alert('ERROR: '+error);
        }, () =>{
          console.log('COMPLETED');
      });;
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
