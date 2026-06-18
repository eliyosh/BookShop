import { Component, inject, computed } from '@angular/core';
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

  // filters top 3 highest sales counts for highly judge section
  topSellers = computed(() => {
    return [...this.cartService.inventory()]
      .sort((a, b) => b.salesCount - a.salesCount)
      .slice(0, 3);
  });

  // filters top 3 highest read counts for shelf burners section
  mostRead = computed(() => {
    return [...this.cartService.inventory()]
      .sort((a, b) => b.readCount - a.readCount)
      .slice(0, 3);
  });
}
