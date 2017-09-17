import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PlacesService } from '../../services/places.service';

import { NewPlacePage } from '../new-place/new-place';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];

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

  onOpenPlace(){
    this.modalCtrl.create(PlacePage).present();
  }

}
