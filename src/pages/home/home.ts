import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PlacesService } from '../../services/places.service';

import { NewPlacePage } from '../new-place/new-place';
import { PlacePage } from '../place/place';

import { Place } from '../../model/place.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: Place[] = [];

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private placeService: PlacesService
  ) {}

  ionViewWillEnter(){
    this.placeService.getPlaces()
      .then(places => {
        this.places = places;
      });
  }

  onLoadNewPlace(){
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place){
    this.modalCtrl.create(PlacePage, place).present();
  }

}
