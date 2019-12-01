import { Component, OnInit } from '@angular/core';
import { QleanMarketService } from '../qlean.market.service';

@Component({
  selector: 'my-balance',
  templateUrl: './my-balance.component.html',
  styleUrls: ['./my-balance.component.css']
})
export class MyBalanceComponent implements OnInit {

  creditsBalance = 0.0;
  initiativesCount = 0;
  currentGoal = 0;
  wasteGenerationQuotas = 0;

  constructor(private marketService: QleanMarketService) { }

  ngOnInit() {
    this.marketService.myBalance().then((balance: any[]) => {

      this.creditsBalance = balance[0].toNumber();
      this.initiativesCount = balance[1].toNumber();
      this.currentGoal = balance[2].toNumber();
      this.wasteGenerationQuotas = balance[3].toNumber();
    })
      .catch(error => {
        console.log("ERROR myBalance", error);
      });
  }

  getStatusColor () {
    const colors = ["red.png", "yellow.jpg", "green.png"];    
    const path ="assets/img/status/";


    return `${path}/${colors[0]}`;
  }

  getCategory () {
    return 'A-';
  }


}
