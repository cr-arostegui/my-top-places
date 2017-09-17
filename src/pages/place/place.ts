import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Place } from '../../model/place.model';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  
  currentPlace: Place;

  constructor(
    private viewCtrl: ViewController,
    private navParms: NavParams
  ) {
    this.currentPlace = this.navParms.data;
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }
}
