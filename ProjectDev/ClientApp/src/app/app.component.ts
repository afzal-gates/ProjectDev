import { Component } from '@angular/core';

//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html'
//})
//export class AppComponent {
//  title = 'app';
//}

@Component({
  selector: 'app-root',
  template: `<router-outlet (activate)="onLoad($event)" ></router-outlet>`,
})
export class AppComponent {

  onLoad(event) {
    window.scroll(0, 0);
  }

}
