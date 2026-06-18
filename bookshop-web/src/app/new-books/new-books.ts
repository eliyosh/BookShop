
import { Component, inject, signal } from '@angular/core';
import { CartService } from '../cart';

@Component({
  selector: 'app-order',
  standalone: true,
  template: `
    <div class="order-layout-grid">
      <!-- selected books-->
      <div class="items-column">
        <h3>Selected Literature Items</h3>
        
        @for (item of cartService.cart(); track (item.id + item.format)) {
          <div class="item-row">
            <div class="item-details">
              <img [src]="item.cover" alt="Cover" class="cart-row-img" (click)="cartService.openDetails(item)">
              <div>
                <h4>{{ item.title }} <small class="format-tag">({{ item.format }})</small></h4>
                <p>Unit Price: ₱{{ item.price }}</p>
              </div>
            </div>
            
            <div class="quantity-controls">
              <button class="qty-btn" (click)="cartService.updateQuantity(item.id, item.format, -1)">-</button>
              <span class="qty-val">{{ item.quantity }}</span>
              <button class="qty-btn" (click)="cartService.updateQuantity(item.id, item.format, 1)">+</button>
              <button class="remove-btn" (click)="cartService.removeFromCart(item.id, item.format)">Remove</button>
            </div>
          </div>
        } @empty {
          <p class="empty-text">Your selection cart bag workspace is currently empty.</p>
        }
      </div>

      <!-- verification section-->
      <div class="form-column">
        <h3>Kiosk Bag Validation</h3>
        
        <div class="input-group">
          <label>Customer Full Name:</label>
          <input type="text" placeholder="Enter full name..." (input)="updateField('name', $event)">
        </div>
        <div class="input-group">
          <label>Contact Phone Number:</label>
          <input type="text" placeholder="Enter contact number..." (input)="updateField('phone', $event)">
        </div>
        <div class="input-group">
          <label>Shipping / Delivery Address:</label>
          <input type="text" placeholder="Enter complete address..." (input)="updateField('address', $event)">
        </div>

        <div class="billing-summary">
          <h4>Order Summary Matrix</h4>
          <div class="bill-line"><span>Items Subtotal:</span> <span>₱{{ cartService.totalPrice() }}</span></div>
          <div class="bill-line"><span>Tax / Handling Fees:</span> <span>₱0</span></div>
          <hr style="border-color: var(--primary-gold); margin: 0.75rem 0;">
          <div class="bill-line total"><span>Total Gross Due:</span> <span>₱{{ cartService.totalPrice() }}</span></div>
        </div>

        <button class="confirm-btn" [disabled]="cartService.cart().length === 0" (click)="processReceipt()">
          CONFIRM PURCHASE ORDER
        </button>
      </div>
    </div>
  `,
  styles: [`
    .order-layout-grid { display: flex; gap: 3rem; margin-top: 2rem; flex-wrap: wrap; }
    .items-column { flex: 2; background: var(--bg-accent-blue); padding: 2rem; border-radius: 4px; min-width: 300px; }
    .form-column { flex: 1; background: var(--bg-accent-blue); padding: 2rem; border-radius: 4px; border: 1px solid var(--primary-gold); min-width: 280px; }
    .item-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #3a4b73; padding: 1rem 0; }
    .item-details { display: flex; gap: 1rem; align-items: center; }
    .cart-row-img { width: 45px; height: 65px; object-fit: cover; border: 1px solid var(--primary-gold); cursor: pointer; }
    .format-tag { color: var(--primary-gold); font-weight: bold; font-size: 0.8rem; }
    .quantity-controls { display: flex; align-items: center; gap: 0.5rem; }
    .qty-btn { background: var(--primary-gold); border: none; padding: 0.2rem 0.6rem; font-weight: bold; cursor: pointer; color: var(--bg-dark-blue); }
    .qty-val { font-size: 1.1rem; width: 25px; text-align: center; font-weight: bold; }
    .remove-btn { background: #d32f2f; color: white; border: none; padding: 0.3rem 0.7rem; cursor: pointer; margin-left: 1rem; font-weight: bold; }
    
    .input-group { margin-bottom: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; }
    .input-group label { font-size: 0.9rem; color: var(--primary-gold); font-weight: bold; }
    .input-group input { padding: 0.6rem; background: var(--bg-dark-blue); border: 1px solid var(--primary-gold); color: white; font-family: inherit; }
    .billing-summary { background: var(--bg-dark-blue); padding: 1rem; margin: 1.5rem 0; border-radius: 4px; border: 1px dashed #3a4b73; }
    .bill-line { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.95rem; }
    .total { font-weight: bold; color: var(--primary-gold); font-size: 1.2rem; }
    .confirm-btn { width: 100%; background: var(--primary-gold); color: var(--bg-dark-blue); border: none; padding: 1rem; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; }
    .confirm-btn:disabled { background: #555; color: #888; cursor: not-allowed; border: 1px solid #444; }
    .empty-text { text-align: center; font-style: italic; color: var(--text-light); margin-top: 2rem; }
  `]
})
export class NewBooksComponent {
  cartService = inject(CartService);

  // shipping 
  customerData = signal({ name: '', phone: '', address: '' });

  updateField(field: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.customerData.update(current => ({ ...current, [field]: value }));
  }

  processReceipt() {
    const form = this.customerData();
    if (!form.name || !form.phone || !form.address) {
      alert('Please fill out all delivery verification parameters!');
      return;
    }
    
    alert(`Order Confirmed!\n\nThank you, ${form.name}.\nYour payment total of ₱${this.cartService.totalPrice()} has been logged successfully.\nDeliveries will dispatch directly to: ${form.address}.`);
    this.cartService.clearCart();
  }
}
