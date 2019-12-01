import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { QleanMarketService } from './qlean.market.service';
import { OrdersBookComponent } from './orders-book/orders-book.component';
import { OHLCStatsComponent } from './ohlcstats/ohlcstats.component';
import { TradePanelComponent } from './trade-panel/trade-panel.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { CurrentPriceComponent } from './current-price/current-price.component';
import { CleanInitiativesPanelComponent } from './clean-initiatives-panel/clean-initiatives-panel.component';
import { MyBalanceComponent } from './my-balance/my-balance.component';
import { NewCleanInitiativeComponent } from './new-clean-initiative/new-clean-initiative.component';


const routes: Routes = [
  {
    path: 'initiative',
    component: NewCleanInitiativeComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    OrdersBookComponent,
    OHLCStatsComponent,
    TradePanelComponent,
    PendingOrdersComponent,
    CurrentPriceComponent,
    CleanInitiativesPanelComponent,
    MyBalanceComponent,
    NewCleanInitiativeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    QleanMarketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
