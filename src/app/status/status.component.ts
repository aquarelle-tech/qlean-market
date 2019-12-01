import { Component, OnInit } from '@angular/core';
import { QleanMarketService } from '../qlean.market.service';
import { Eth } from 'web3-eth';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private market: QleanMarketService) { }

  ngOnInit() {
    // this.market.getAccountInfo()
    //   .then(response => console.log("RESPONSE", response))
    //   .catch(error => console.log("ERROR", error));

  //   this.market.addBuyOrder(10,100)
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));

    this.market.getBuyOrdersBook()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

}
