import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  onAddPlace(newPlace: {title: string}) {
    this.placesService.addPlace(newPlace);
    this.navCtrl.pop();
  }

}
