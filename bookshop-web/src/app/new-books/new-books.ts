import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-new-books',
  standalone: true,
  imports: [],
  templateUrl: './new-books.html',
  styleUrl: './new-books.css'
})
export class NewBooks{
  // input decorator channel definition
  booksData = input.required<any[]>();

  // output decorator channel definition
  triggerOrder = output<any>();

  broadcastClickEvent(book: any) {
    this.triggerOrder.emit(book);
  }
}
