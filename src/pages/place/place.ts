import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    private viewCtrl: ViewController,
    private navParms: NavParams
  ) {
    this.lat = this.navParms.data.location.lat;
    this.lng = this.navParms.data.location.lng;
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }
}
