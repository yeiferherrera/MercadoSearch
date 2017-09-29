import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavParams, NavController } from 'ionic-angular';
import { SearchServiceProvider } from '../../providers/SearchServiceProvider/SearchServiceProvider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  results: any = []

  constructor(
    public navParams: NavParams,
    public SearchServiceProvider: SearchServiceProvider,
    public navCtrl: NavController) {
    }

    buscar(product:string){
    this.SearchServiceProvider.getProduct(product)
    .then( (response) => {
      this.results = response.results
    }).catch( (err) => {
      console.log(err)
    })
  }

}