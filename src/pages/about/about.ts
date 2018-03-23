import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExchangeRateServiceProvider } from '../../providers/exchange-rate-service/exchange-rate-service';
//import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  oxrData: any;

  constructor(public navCtrl: NavController, private oxrService: ExchangeRateServiceProvider/*, appVersion: AppVersion*/) {
    this.getOxrData();
  }

  ionViewDidEnter() {
    this.timeConverter();
  }

  getOxrData() {
    this.oxrService.getOxrData().subscribe(data => this.oxrData = data);
  }

  timeConverter() {

    var unixTime = this.oxrData.timestamp;
    var a = new Date(unixTime * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    //var hour = a.getHours();
    //var min = a.getMinutes();
    //var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year;// + ' ' + hour + ':' + min + ':' + sec;
    var lastRateUpdate = document.getElementById("lastRateUpdate");
    lastRateUpdate.innerText = time;
    console.log("timestamp: " + this.oxrData.timestamp);
  }

}

//function getAppVersion(){
//  this.appVersion.getAppName();
//  this.appVersion.getPackageName();
//  this.appVersion.getVersionCode();
//  this.appVersion.getVersionNumber();
//}
