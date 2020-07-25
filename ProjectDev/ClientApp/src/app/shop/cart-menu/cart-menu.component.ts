import { Component, HostBinding } from '@angular/core';

import { CartMenuService } from './cart-menu.service';

@Component({
  selector: 'app-cart-menu',
  styleUrls: ['./cart-menu.component.scss'],
  templateUrl: './cart-menu.component.html',
  providers: [CartMenuService],
})
export class CartMenuComponent {
  @HostBinding('class.notification-menu') private readonly notificationMenu = true;

  public carts: object[];

  constructor(notificationMenuService: CartMenuService) {
    this.carts = notificationMenuService.getNotifications();
  }
}
