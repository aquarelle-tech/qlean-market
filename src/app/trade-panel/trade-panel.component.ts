import { Component, OnInit } from '@angular/core';
import { QleanMarketService } from '../qlean.market.service';

@Component({
  selector: 'trade-panel',
  templateUrl: './trade-panel.component.html',
  styleUrls: ['./trade-panel.component.css']
})
export class TradePanelComponent implements OnInit {

  price = 0.00;
  buyAmount = 0;
  sellAmount = 0;

  constructor(private marketService: QleanMarketService) { }


  ngOnInit() {
  }

  buyCredit(ev: MouseEvent) {
    ev.preventDefault();

    this.marketService.addBuyOrder(this.buyAmount, this.price * 10)
      .then(response => {
        console.log('BUY', response);
      });

  }

  sellCredit(ev: MouseEvent) {
    ev.preventDefault();

    this.marketService.addSellOrder(this.sellAmount, this.price * 10)
      .then(response => {
        console.log('Sell', response);
      });

  }

}
