import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  values$ = of(20, 40, 50, 60).pipe(
    map(x => x * 2),
    tap(y => console.log(y)),
    take(3)
  );
  OnInit() {


    this.searchTextAction$
      .pipe(
        tap(console.log),
        map(text => console.log(text)),
        debounceTime(500),
        tap(x => console.log(x)),
        mergeMap(val => this.values$.pipe(map(x => x == val)))
      );
  }
}
