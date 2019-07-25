import { Component, OnInit } from '@angular/core';
import { of, from, Subject } from 'rxjs';
import { map, tap, take, debounceTime, mergeMap } from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';




  ngOnInit() {
    // of(2, 3, 4, 5).subscribe(console.log);
    let array = [20, 40, 50, 60];
    // of(...array).subscribe(console.log);
    // from([20, 40, 50, 60]).subscribe(
    //   (result) => console.log(result),
    //   (error) => console.log(error),
    //   () => console.log('complete'));




    // of(20, 40, 50, 60).pipe(
    //   map(x => x * 2),
    //   tap(y => console.log(y)),
    //   take(3)
    // ).subscribe(
    //   (result) => console.log(result),
    //   (error) => console.log(error),
    //   () => console.log('complete'));

    // of(2, 3, 4, 5).pipe(
    //   map(x => x * 2),
    //   tap(x => console.log(x)),
    //   take(3)
    // ).subscribe(
    //   (result) => console.log(result),
    //   (error) => console.log(error),
    //   () => console.log('complete'));


  }

  onEnteringData(text){
   this.searchTextSubject.next(text);
  }
}
