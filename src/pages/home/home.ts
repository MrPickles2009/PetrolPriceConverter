import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExchangeRateServiceProvider } from '../../providers/exchange-rate-service/exchange-rate-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  curInput: number;
  convertFrom: string;
  convertTo: string;
  curSel1: string;
  curSel2: string;
  usdtoeur: any;
  usdtogbp: any;
  usdtolbp: any;
  usdtoaud: any;
  usdtomxn: any;
  oxrData: any;
  

  constructor(public navCtrl: NavController, private oxrService: ExchangeRateServiceProvider) {
    this.getOxrData();
  }

  ionViewDidEnter() {
    this.curConvert();
  }
  
  onChange1(selectedValue: any) {
    this.curSel1 = selectedValue;
  }

  onChange2(selectedValue: any) {
    this.curSel2 = selectedValue;
  }

  getOxrData() {
    this.oxrService.getOxrData().subscribe(data => this.oxrData = data);
  }

  curConvert() {

    //USD
    const usdtoeur = this.oxrData.rates.EUR;
    const usdtogbp = this.oxrData.rates.GBP;
    const usdtolbp = this.oxrData.rates.LBP;
    const usdtoaud = this.oxrData.rates.AUD;
    const usdtomxn = this.oxrData.rates.MXN;

    //EUR
    const eurtousd = 1/usdtoeur;
    const eurtogbp = usdtogbp/usdtoeur;
    const eurtolbp = usdtolbp/usdtoeur;
    const eurtoaud = usdtoaud/usdtoeur;
    const eurtomxn = usdtomxn/usdtoeur;
    
    //GBP
    const gbptoeur = usdtoeur/usdtogbp;
    const gbptousd = 1/usdtogbp;
    const gbptolbp = usdtolbp/usdtogbp;
    const gbptoaud = usdtoaud/usdtogbp;
    const gbptomxn = usdtomxn/usdtogbp;

    //LBP
    const lbptoeur = usdtoeur/usdtolbp;
    const lbptousd = 1/usdtolbp;
    const lbptogbp = usdtogbp/usdtolbp;
    const lbptoaud = usdtoaud/usdtolbp;
    const lbptomxn = usdtomxn/usdtolbp;

    //AUD
    const audtoeur = usdtoeur/usdtoaud;
    const audtousd = 1/usdtoaud;
    const audtogbp = usdtogbp/usdtoaud;
    const audtolbp = usdtolbp/usdtoaud;
    const audtomxn = usdtomxn/usdtoaud;

    //MXN
    const mxntoeur = usdtoeur/usdtomxn;
    const mxntousd = 1/usdtomxn;
    const mxntogbp = usdtogbp/usdtomxn;
    const mxntolbp = usdtolbp/usdtomxn;
    const mxntoaud = usdtoaud/usdtomxn;

    const GPL = 0.264172;
    const LPG = 3.785411;
    var output = document.getElementById("curOutput");

    switch (Number(this.curSel1)) {
      case 0:
      //eur
        switch (Number(this.curSel2)) {
          case 0:
            //eur to eur
            output.textContent = "€" + this.curInput + "/l";
            break;
          case 1:
            //eur to usd
            output.textContent = "$" + ((this.curInput * LPG * eurtousd).toFixed(2)).toString() + "/gal";
            break;
          case 2:
            //eur to gbp
            output.textContent = "£" + ((this.curInput * eurtogbp).toFixed(2)).toString() + "/l";
            break;
          case 3:
            //eur to lbp
            output.textContent = "£" + ((this.curInput * eurtolbp * 20).toFixed(0)).toString() + "/20l";
            break;
          case 4:
            //eur to aud
            output.textContent = "$" + ((this.curInput * eurtoaud).toFixed(2)).toString() + "/l";
            break;
          case 5:
            //eur to mxn
            output.textContent = "$" + ((this.curInput * eurtomxn).toFixed(2)).toString() + "/l";
            break;
        }
        break;
      case 1:
      //usd
        switch (Number(this.curSel2)) {
          case 0:
            //usd to eur
            output.textContent = "€" + ((this.curInput * GPL * usdtoeur).toFixed(2)).toString() + "/l";
            break;
          case 1:
            //usd to usd
            output.textContent = "$" + this.curInput + "/gal";
            break;
          case 2:
            //usd to gbp
            output.textContent = "£" + ((this.curInput * GPL * usdtogbp).toFixed(2)).toString() + "/l";
            break;
          case 3:
            //usd to lbp
            output.textContent = "£" + ((this.curInput * GPL * usdtolbp * 20).toFixed(0)).toString() + "/20l";
            break;
          case 4:
            //usd to aud
            output.textContent = "$" + ((this.curInput * GPL * usdtoaud).toFixed(2)).toString() + "/l";
            break;
          case 5:
            //usd to mxn
            output.textContent = "$" + ((this.curInput * GPL * usdtomxn).toFixed(2)).toString() + "/l";
            break;
        }
        break;
      case 2:
      //gbp
        switch (Number(this.curSel2)) {
          case 0:
            //gbp to eur
            output.textContent = "€" + ((this.curInput * gbptoeur).toFixed(2)).toString() + "/l";
            break;
          case 1:
            //gbp to usd
            output.textContent = "$" + ((this.curInput * LPG * gbptousd).toFixed(2)).toString() + "/gal";
            break;
          case 2:
            //gbp to gbp
            output.textContent = "£" + this.curInput + "/l";
            break;
          case 3:
            //gbp to lbp
            output.textContent = "£" + ((this.curInput * gbptolbp * 20).toFixed(0)).toString() + "/20l";
            break;
          case 4:
            //gbp to aud
            output.textContent = "$" + ((this.curInput * gbptoaud).toFixed(2)).toString() + "/l";
            break;
          case 5:
            //gbp to mxn
            output.textContent = "$" + ((this.curInput * gbptomxn).toFixed(2)).toString() + "/l";
            break;
        }
        break;
      case 3:
      //lbp
        switch (Number(this.curSel2)) {
          case 0:
            //lbp to eur
            output.textContent = "€" + ((this.curInput * lbptoeur / 20).toFixed(2)).toString() + "/l";
            break;
          case 1:
            //lbp to usd
            output.textContent = "$" + ((this.curInput * LPG * lbptousd / 20).toFixed(2)).toString() + "/gal";
            break;
          case 2:
            //lbp to gbp
            output.textContent = "£" + ((this.curInput * lbptogbp / 20).toFixed(2)).toString() + "/l";
            break;
          case 3:
            //lbp to lbp
            output.textContent = "£" + this.curInput + "/20l";
            break;
          case 4:
            //lbp to aud
            output.textContent = "$" + ((this.curInput * lbptoaud / 20).toFixed(2)).toString() + "/l";
            break;
          case 5:
            //lbp to mxn
            output.textContent = "$" + ((this.curInput * lbptomxn / 20).toFixed(2)).toString() + "/l";
            break;
        }
        break;
      case 4:
      //aud
        switch (Number(this.curSel2)) {
          case 0:
            //aud to eur
            output.textContent = "€" + ((this.curInput * audtoeur).toFixed(2)).toString() + "/l";
            break;
          case 1:
            //aud to usd
            output.textContent = "$" + ((this.curInput * LPG * audtousd).toFixed(2)).toString() + "/gal";
            break;
          case 2:
            //aud to gbp
            output.textContent = "£" + ((this.curInput * audtogbp).toFixed(2)).toString() + "/l";
            break;
          case 3:
            //aud to lbp
            output.textContent = "£" + ((this.curInput * audtolbp * 20).toFixed(2)).toString() + "/20l";
            break;
          case 4:
            //aud to aud
            output.textContent = "$" + this.curInput + "/l";
            break;
          case 5:
            //aud to mxn
            output.textContent = "$" + ((this.curInput * audtomxn).toFixed(2)).toString() + "/l";
            break;
        }
        break;
      case 5:
      //mxn
        switch (Number(this.curSel2)) {
          case 0:
            //mxn to eur
            output.textContent = "€" + ((this.curInput * mxntoeur).toFixed(2)).toString() + "/l";
            break;
          case 1:
            //mxn to usd
            output.textContent = "$" + ((this.curInput * LPG * mxntousd).toFixed(2)).toString() + "/gal";
            break;
          case 2:
            //mxn to gbp
            output.textContent = "£" + ((this.curInput * mxntogbp).toFixed(2)).toString() + "/l";
            break;
          case 3:
            //mxn to lbp
            output.textContent = "£" + ((this.curInput * mxntolbp * 20).toFixed(2)).toString() + "/20l";
            break;
          case 4:
            //mxn to aud
            output.textContent = "$" + ((this.curInput * mxntoaud).toFixed(2)).toString() + "/l";
            break;
          case 5:
            //mxn to mxn
            output.textContent = "$" + this.curInput + "/l";
            break;
        }
        break;
    }
  }
}
