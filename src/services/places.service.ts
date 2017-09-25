import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { Place } from '../model/place.model';

@Injectable()
export class PlacesService {
  private places: Place[] = [];

  constructor(private storage: Storage) {}

  addPlace(place: Place) {
    this.places.push(place);
    this.storage.set('places',this.places);
  }

  deletePlace(placeToDelete: Place){
    this.places = this.places.filter(place => {
      if(JSON.stringify(placeToDelete) !== JSON.stringify(place) ) {
        return place;
      }
    });
    this.storage.set('places', this.places);
    return this.places;
  }

  getPlaces(): Promise<Place[]>{
    return this.storage.get('places')
      .then(places => {
        this.places = places ? places : [];
        return this.places;
      });
  }
}