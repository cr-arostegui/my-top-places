import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  location: any;

  constructor(
    private navCtrl: NavController,
    private placesService: PlacesService,
    private geolocation: Geolocation
  ) {}

  onAddPlace(newPlace: {title: string}) {
    this.placesService.addPlace(newPlace);
    this.navCtrl.pop();
  }

  onLocateUser(){
    this.geolocation.getCurrentPosition()
      .then(location => {
        this.location = location;
      })
      .catch(() => console.log('An error ocurred'));
  }

}
