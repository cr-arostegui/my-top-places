import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  location: {lat: number, lng: number} = {lat: 0, lng: 0};

  constructor(
    private navCtrl: NavController,
    private placesService: PlacesService,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) {}

  onAddPlace(newPlace: {title: string, description: string}) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    //loader.present();
    this.geolocation.getCurrentPosition()
    .then(location => {
      console.log('Location fetched successfully.');
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;
      this.placesService.addPlace({
        title: newPlace.title,
        description: newPlace.description,
        location: this.location
      });
      //loader.dismiss();
      this.navCtrl.pop();
    })
    .catch(() => {
      this.placesService.addPlace({
        title: newPlace.title,
        description: newPlace.description,
        location: this.location
      });
      console.log('Location could not fetched.');
      //loader.dismiss();
      this.navCtrl.pop();
    });
  }
}
