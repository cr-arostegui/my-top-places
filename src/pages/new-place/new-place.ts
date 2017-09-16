import { Component } from '@angular/core';

import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(
    private placesService: PlacesService
  ) {}

  onAddPlace(newPlace: {title: string}) {
    this.placesService.addPlace(newPlace);
  }

}
