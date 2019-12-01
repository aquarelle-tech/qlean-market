import { Injectable, Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';

declare const require: any;
declare const window: any;
declare const web3: any;

const tokenAbi = require('../../build/contracts/Market.json');
const owner = '0xe20d147C5eb58E084B2d47aA47Cca29525E39fa2';

@Injectable({
  providedIn: 'root'
})
export class QleanMarketService {

  private web3Provider: any;
  private app: any;
  private contracts: {};
  private accounts: any[];

  constructor() {

    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    window.web3 = new Web3(this.web3Provider);
    this.getAccounts()
      .then (accounts => {
        this.accounts = accounts;
        web3.eth.defaultAccount = this.accounts[0];
      });
  }

  private async getAccounts() {
    return await web3.eth.getAccounts();
  }

  // Creates a new initiatives associated to the client
  newCleanInitiative(title: string, goal: number) {
    return new Promise((resolve, reject) => {
      const marketContract = TruffleContract(tokenAbi);
      marketContract.setProvider(this.web3Provider);

      marketContract.deployed().then(instance => {
        // string memory title, uint goal, uint creation
        const creation = new Date().getTime();
        instance.newCleanInitiative(title, goal, creation, { from: web3.eth.defaultAccount })
          .then(result => resolve(result))
          .catch(error => reject(error));
      });

    });
  }

  getCleanInitiatives() {
    return new Promise((resolve, reject) => {
      const marketContract = TruffleContract(tokenAbi);
      marketContract.setProvider(this.web3Provider);

      marketContract.deployed().then(instance => {
        instance.getCleanInitiatives()
          .then(result => resolve(result))
          .catch(error => reject(error));
      });
    });
  }

  myBalance() {
    return new Promise((resolve, reject) => {
      const marketContract = TruffleContract(tokenAbi);
      marketContract.setProvider(this.web3Provider);

      marketContract.deployed().then(instance => {
        instance.myBalance()
          .then(result => resolve(result))
          .catch(error => reject(error));
      });
    });
  }

  addSellOrder(amount, price) {
    console.log ('LLEGÓ');
    

    return new Promise((resolve, reject) => {
      const marketContract = TruffleContract(tokenAbi);
      marketContract.setProvider(this.web3Provider);

      marketContract.deployed().then(instance => {
        instance.addSellOrder(amount, price, { from: web3.eth.defaultAccount })
          .then(result => resolve(result))
          .catch(error => reject(error));
      });
    });
  }

  addBuyOrder(amount, price) {
    return new Promise((resolve, reject) => {
      const marketContract = TruffleContract(tokenAbi);
      marketContract.setProvider(this.web3Provider);

      marketContract.deployed().then(instance => {
        instance.addBuyOrder(amount, price, { from: web3.eth.defaultAccount })
          .then(result => resolve(result))
          .catch(error => reject(error));
      });
    });
  }

  getOrderBook() {
    return new Promise((resolve, reject) => {
      const marketContract = TruffleContract(tokenAbi);
      marketContract.setProvider(this.web3Provider);

      marketContract.deployed().then(instance => {
        instance.getOrderBook({ from: web3.eth.defaultAccount })
          .then(result => resolve(result))
          .catch(error => reject(error));
      });
    });
  }

  closeEvaluationPeriod () {
    return new Promise((resolve, reject) => {
      const marketContract = TruffleContract(tokenAbi);
      marketContract.setProvider(this.web3Provider);

      marketContract.deployed().then(instance => {
        instance.closeEvaluationPeriod({ from: web3.eth.defaultAccount })
          .then(result => resolve(result))
          .catch(error => reject(error));
      });
    });
  }

}

