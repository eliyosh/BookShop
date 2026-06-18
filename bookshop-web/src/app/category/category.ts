import { Component, inject } from '@angular/core';
import { CartService } from '../cart';

@Component({
  selector: 'app-category',
  standalone: true,
  template: `
    <div class="store-container">
      <h2 style="letter-spacing: 2px;">ALL BOOKS LIBRARY CATALOG</h2>
      
      <div class="filter-group" style="margin-top: 2rem;">
        <h3 class="section-divider">Physical Hardbounds</h3>
        <div class="catalog-grid">
          @for (book of cartService.filteredInventory(); track book.id) {
            @if (book.type === 'Physical') {
              <div class="catalog-card">
                <img [src]="book.cover" alt="Cover" class="kiosk-cover-img" (click)="cartService.openDetails(book)" style="cursor: pointer;">
                <h4>{{ book.title }}</h4>
                <p class="catalog-author">By {{ book.author }}</p>
                <p class="catalog-price">₱{{ book.price }}</p>
                <button class="kiosk-box-btn" (click)="cartService.openDetails(book)">VIEW OPTIONS</button>
              </div>
            }
          }
        </div>
      </div>

      <div class="filter-group" style="margin-top: 4rem;">
        <h3 class="section-divider">Digital E-Books</h3>
        <div class="catalog-grid">
          @for (book of cartService.filteredInventory(); track book.id) {
            @if (book.type === 'E-Book') {
              <div class="catalog-card">
                <img [src]="book.cover" alt="Cover" class="kiosk-cover-img" (click)="cartService.openDetails(book)" style="cursor: pointer;">
                <h4>{{ book.title }}</h4>
                <p class="catalog-author">By {{ book.author }}</p>
                <p class="catalog-price">₱{{ book.price }}</p>
                <button class="kiosk-box-btn" (click)="cartService.openDetails(book)">VIEW OPTIONS</button>
              </div>
            }
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .section-divider { 
border-bottom: 2px solid var(--primary-gold); 
padding-bottom: 0.5rem; 
text-transform: uppercase; 
color: var(--primary-gold); 
letter-spacing: 1px; }

    .catalog-grid { 
display: grid; 
grid-template-columns: repeat(auto-fill, 
minmax(220px, 1fr)); 
gap: 2rem; 
margin-top: 1.5rem; }

    .catalog-card { 
background: var(--bg-accent-blue); 
padding: 1.5rem; 
text-align: center; 
border: 1px solid var(--primary-gold); 
display: flex; 
flex-direction: column; 
justify-content: space-between; }

    .catalog-card h4 { 
margin: 0.5rem 0; 
font-size: 1.1rem; 
min-height: 45px; }

    .catalog-author { 
color: var(--text-light); 
font-size: 0.85rem; 
font-style: italic; 
margin: 0;}

    .catalog-price { 
font-weight: bold; 
color: var(--primary-gold); 
margin: 0.75rem 0; }
  `]
})
export class Category{
  cartService = inject(CartService);
}
