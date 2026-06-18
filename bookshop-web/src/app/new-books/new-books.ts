import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-new-books',
  standalone: true,
  imports: [],
  templateUrl: './new-books.html',
  styleUrl: './new-books.css'
})
export class NewBooks {
  
  featuredBooks = input.required<any[]>();
  orderTrigger = output<any>();

  select(book: any) {
    this.orderTrigger.emit(book);
  }
}
