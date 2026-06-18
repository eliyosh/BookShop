import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../cart';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  cartService = inject(CartService);

  // function para mag-scroll down sa footer section
  scrollToFootnote(event: Event) {
    event.preventDefault();
    const section = document.getElementById('footnote-about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // function para sa toggle pages navigation filter
  setGenre(genre: string) {
    this.cartService.currentCategory.set(genre);
  }
}
