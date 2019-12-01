import { Component, OnInit } from '@angular/core';
import { QleanMarketService } from '../qlean.market.service';

@Component({
  selector: 'pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  orderList = [
    {
      ID: 1,
      amount: 10,
      price: 20,
      isASell: false
    },
    {
      ID: 4,
      amount: 1,
      price: 14,
      isASell: false
    },
    {
      ID: 6,
      amount: 6,
      price: 26,
      isASell: false
    },
    {
      ID: 7,
      amount: 10,
      price: 23,
      isASell: false
    },

  ];

  constructor(private marketService: QleanMarketService) { }

  ngOnInit() {
    // this.marketService.getOrderBook ()
    // .then ((orderBook : any[]) => {
    //   this.orderList = orderBook;
    //   console.log ("RESPONSE", orderBook);
    // });
  }

}
