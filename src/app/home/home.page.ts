import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'date';

  constructor() { }

  ionViewDidEnter() {
    console.log(this.selectedMode);

  }
  onChange(event) {
    console.log(event);

  }

  segmentChanged(event) {
    console.log(event);

  }

  // presentationChange(){
  //   this.selectedMode
  // }

}
