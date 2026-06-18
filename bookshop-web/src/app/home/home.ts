import { Component, inject } from '@angular/core';
import { CartService } from '../cart';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <!-- new books section -->
    <section class="hero-section">
      <div class="hero-text-side">
        <h2>Judge These Safely By Their Covers</h2>
      </div>
      <div class="hero-books-side">
        @for (book of cartService.filteredInventory(); track book.id) {
          @if (book.id === 1 || book.id === 2) {
            <div class="hero-card">
              <img [src]="book.cover" alt="Cover" class="kiosk-cover-img" (click)="cartService.openDetails(book)" style="cursor: pointer;">
              <h4>{{ book.title }}</h4>
              <p>{{ book.author }}</p>
              <button class="kiosk-box-btn" (click)="cartService.openDetails(book)">ADD TO BAG</button>
            </div>
          }
        }
      </div>
    </section>

    <!-- best seller section -->
    <section class="shelf-section">
      <h3 class="shelf-title">HIGHLY JUDGE</h3>
      <div class="shelf-grid">
        @for (book of cartService.filteredInventory(); track book.id) {
          @if (book.salesCount >= 110 && book.type === 'Physical') {
            <div class="shelf-item">
              <img [src]="book.cover" alt="Cover" class="kiosk-cover-img" (click)="cartService.openDetails(book)" style="cursor: pointer;">
              <h5>{{ book.title }}</h5>
              <button class="kiosk-box-btn" (click)="cartService.openDetails(book)">ADD TO BAG</button>
            </div>
          }
        }
      </div>
    </section>

    <!-- shelf burner section-->
    <section class="shelf-section">
      <h3 class="shelf-title">SHELF BURNERS</h3>
      <div class="shelf-grid">
        @for (book of cartService.filteredInventory(); track book.id) {
          @if (book.readCount >= 150 && book.type === 'E-Book') {
            <div class="shelf-item">
              <img [src]="book.cover" alt="Cover" class="kiosk-cover-img" (click)="cartService.openDetails(book)" style="cursor: pointer;">
              <h5>{{ book.title }}</h5>
              <button class="kiosk-box-btn" (click)="cartService.openDetails(book)">BUY ACCESS</button>
            </div>
          }
        }
      </div>
    </section>
  `,
  
  styles: [`
    .hero-section { 
display: flex; 
background-color: var(--bg-accent-blue); 
padding: 3rem; 
margin-bottom: 3rem; 
align-items: center; }

    .hero-text-side h2 { 
font-size: 2.5rem; 
max-width: 300px; 
line-height: 1.3; 
color: var(--text-white); }

    .hero-books-side { 
display: flex; 
gap: 2rem; 
margin-left: auto; }

    .hero-card { 
width: 180px; 
text-align: center; 
background: var(--bg-dark-blue); 
padding: 1rem; 
border: 1px solid var(--primary-gold); 
display: flex; 
flex-direction: column; }
    
    .shelf-section { 
text-align: center; 
margin-bottom: 4rem; }

    .shelf-title { 
font-size: 1.5rem; 
letter-spacing: 3px; 
color: var(--text-white); 
margin-bottom: 2rem; 
text-transform: uppercase; }

    .shelf-grid { 
display: flex; 
justify-content: center; 
gap: 2.5rem; 
flex-wrap: wrap; }

    .shelf-item { 
width: 160px; 
text-align: center; 
display: flex; 
flex-direction: column; }

    h5 { 
margin: 0.5rem 0; 
font-size: 0.95rem; 
min-height: 40px; }
  `]
})
export class HomeComponent {
  cartService = inject(CartService);
}
