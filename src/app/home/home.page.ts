import { Component } from '@angular/core';

declare var $:any;
declare function initPageEcommerce([]): any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      initPageEcommerce($);
    }, 50);
  }
}
