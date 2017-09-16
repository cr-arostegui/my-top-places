import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class PlacesService {
  private places: {title: string}[] = [];

  constructor(private storage: Storage) {}

  addPlace(place: {title: string}) {
    this.places.push(place);
    this.storage.set('places',this.places);
  }

  getPlaces(): Promise<{title: string}[]>{
    return this.storage.get('places')
      .then(places => {
        this.places = places ? places : [];
        return this.places;
      });
  }
}