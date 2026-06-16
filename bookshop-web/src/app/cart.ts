import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  newBooks= signal([
    {id:1, title:'', author:'', price: '', description:'', image: '' },
    {id:2, title:'', author:'', price: '', description:'', image: '' },
    {id:3, title:'', author:'', price: '', description:'', image: '' },
    {id:4, title:'', author:'', price: '', description:'', image: '' },
    {id:5, title:'', author:'', price: '', description:'', image: '' }
  ]);

 categories = signal([
  //fiction side
  { id:6, title:'', author:'', price: '',catergory: '', description:'', image: '' },
  { id:7, title:'', author:'', price: '',catergory: '', description:'', image: '' },
  { id:8, title:'', author:'', price: '',catergory: '', description:'', image: '' },
  {id:9, title:'', author:'', price: '',catergory: '', description:'', image: '' },
//non-fiction side
  { id:10, title:'', author:'', price: '',catergory: '', description:'', image: '' },
  { id:11, title:'', author:'', price: '',catergory: '', description:'', image: '' },
  { id:12, title:'', author:'', price: '',catergory: '', description:'', image: '' },
  { id:13, title:'', author:'', price: '',catergory: '', description:'', image: '' },
  { id:14, title:'', author:'', price: '',catergory: '', description:'', image: '' },
  { id:15, title:'', author:'', price: '',catergory: '', description:'', image: '' }
 ]);

 //cart state
 private cartItems=signal<any[]>([]);
 cart = this.cartItems.asReadonly();

// tracking computation
 totalPrice= computed(() =>
  this.cartItems().reduce((sum, item) => sum + item.price, 0)
);

// cart modifiers
addToCart(book: any){
  this.cartItems.update(current => [...current, book]);
}

clearCart(){
    this.cartItems.set([]);
  }
}
