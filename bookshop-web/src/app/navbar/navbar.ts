import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { Cart } from '../cart';


@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  public martService = inject(Cart);
  cartCount = this.martService.cartItemCount;
}
