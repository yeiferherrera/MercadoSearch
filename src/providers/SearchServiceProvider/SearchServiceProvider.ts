import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchServiceProvider {

  constructor(public http: Http) {
    
  }

  
  getProduct(product:string) {
    var api:string = "https://api.mercadolibre.com/sites/MCO/search?q=" + product
    return this.http.get(api)
    .map(res => res.json())
    .toPromise();
  }

  
}