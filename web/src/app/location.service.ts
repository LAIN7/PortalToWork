import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocation(callback: (any) => void): Position {
    let currentPosition: Position;

    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(callback);
    } else {
      /* geolocation IS NOT available */
      console.log("not available");
    }

    return currentPosition;
  }
}
