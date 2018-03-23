import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ExchangeRateServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExchangeRateServiceProvider {

  constructor(private http: HttpClient) {
  }

  readTextFile(file): String {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.send(null);
    return rawFile.responseText;
  }

  getOxrData() {
    let apiKey = this.readTextFile("assets/oxrApiKey.txt");
    let url = "https://openexchangerates.org/api/latest.json?app_id=" + apiKey + "&base=USD";
    return this.http.get(url)
    .do(this.logResponse)
    .catch(this.catchError);
  }

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Server error");
  }

  private logResponse(res: Response) {
    console.log(res);
  }

}
