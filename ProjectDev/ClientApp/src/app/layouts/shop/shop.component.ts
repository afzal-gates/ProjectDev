import { Component, ElementRef, ViewChild, Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
/** shop component*/
export class ShopComponent {

  public showTop: boolean;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    
    if (window.pageYOffset < 200)
      this.showTop = true;
    else
      this.showTop = false;
  }

  /** shop ctor */
  productList = [{ id: 1, name: 'sdfsfsfd' }];

  constructor() {
    this.showTop = true;
  }

  gotoTopPage(): void {
    window.scrollTo(0, 0)
  }
}
