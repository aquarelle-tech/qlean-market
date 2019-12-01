import { Component, OnInit } from '@angular/core';
import { QleanMarketService } from '../qlean.market.service';

class CleanInitiative {
  title: string;
  quotesGoal: number;
  timestamp: number;
  status: number;
}


@Component({
  selector: 'clean-initiatives-panel',
  templateUrl: './clean-initiatives-panel.component.html',
  styleUrls: ['./clean-initiatives-panel.component.css']
})
export class CleanInitiativesPanelComponent implements OnInit {

  initiativeList: CleanInitiative[];
  closed = 0;
  inProgress = 0;
  canceled = 0;

  constructor(private marketService: QleanMarketService) { }

  ngOnInit() {

    // this.marketService.closeEvaluationPeriod()
    //   .then(response => console.log('closeEvaluationPeriod', response))
    //   .catch(error => console.log('ERROR closeEvaluationPeriod', error));

    // this.marketService.newCleanInitiative('Dejar de comprar yogourt en envase plástico', 10).then(
    //   response => {
    //     console.log('Inicitiva creada', response);
    //   });

    //   this.marketService.newCleanInitiative('Llevar mis bolsas de tela siempre al super', 10).then(
    //     response => {
    //       console.log('Inicitiva creada', response);
    //     });
            
    this.marketService.getCleanInitiatives()
      .then((initiatives: any[]) => {

        console.log ('INIT', initiatives);

        this.initiativeList = []; // starts with a new list;
        // get all the list
        initiatives.forEach(i => {
          console.log('ITEM', i);
          const item: CleanInitiative = {
            title: i[0],
            quotesGoal: parseFloat(i[1]),
            timestamp: parseFloat(i[2]),
            status: parseFloat(i[3])
          };

          this.initiativeList.push(item);
        });
        // Count
        this.initiativeList.forEach(i => {
          switch (i.status) {
            case 0: this.inProgress++; break;
            case 1: this.closed++; break;
            case 2: this.canceled++; break;
          }
        });

      });
  }


  getStatusName(status) {
    switch (status) {
      case 2:
      case 0: return "En progreso";
    }
  }

}
