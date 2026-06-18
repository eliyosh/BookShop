import { Component, inject } from '@angular/core';
import { CartService } from '../cart';
import { NewBooks } from '../new-books/new-books';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewBooks],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cartService = inject(CartService);

  // function para sa event selection click binding trigger
  selectBook(book: any) {
    this.cartService.openDetails(book);
  }

  // function para sa reusable child output handler mapping logic
  handleChildOrderEvent(book: any) {
    this.cartService.openDetails(book);
  }
}
