import { Component, OnInit } from '@angular/core';

class Order {
  ID: string;
  amount: number;
  price: number;
  isASell: boolean;
}


@Component({
  selector: 'orders-book',
  templateUrl: './orders-book.component.html',
  styleUrls: ['./orders-book.component.css']
})
export class OrdersBookComponent implements OnInit {

  sellOrdersBook: Order[] = [];
  buyOrdersBook: Order[] = [];

  constructor() { }

  ngOnInit() {
    this.buyOrdersBook = [
      {ID: '11', amount: 10, price: 4, isASell: false},
      {ID: '12', amount: 3, price: 5, isASell: false},
      {ID: '13', amount: 4, price: 6, isASell: false},
      {ID: '14', amount: 12, price: 7, isASell: false},
      {ID: '15', amount: 1, price: 9, isASell: false},
      {ID: '16', amount: 1, price: 1, isASell: false},
      {ID: '17', amount: 5, price: 5, isASell: false}
    ];

    this.sellOrdersBook = [
      {ID: '11', amount: 1, price: 3, isASell: true},
      {ID: '12', amount: 34, price: 20, isASell: true},
      {ID: '13', amount: 1, price: 64, isASell: true},
      {ID: '14', amount: 14, price: 3, isASell: true},
      {ID: '15', amount: 12, price: 2, isASell: true},
      {ID: '16', amount: 1, price: 11, isASell: true},
      {ID: '17', amount: 7, price: 19, isASell: true},
      {ID: '18', amount: 14, price: 3, isASell: true},
      {ID: '19', amount: 12, price: 2, isASell: true},
      {ID: '20', amount: 14, price: 3, isASell: true},
      {ID: '21', amount: 12, price: 2, isASell: true}
    ];

  }

}
