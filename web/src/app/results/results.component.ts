import { Component, OnInit, Input } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Job, Location } from '../models/job';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  curLocation: string = "somewhere, USA";
  results: Job[] = [];
  loading = false;
  origin: any;
  mapOrigin: any;

  constructor(private jobService: JobsService, private locationService: LocationService) { }

  radians(degrees: number) {
    return degrees * Math.PI / 180;   
  }

  getDistance = (location: Location) => {
    let lat1 = +location.lat;
    let lon1 = +location.lng;

    let lat2 = this.origin.lat;
    let lon2 = this.origin.lng;
    var R = 6371e3; // metres
    var φ1 = this.radians(lat1);
    var φ2 = this.radians(lat2);
    var Δφ = this.radians(lat2-lat1);
    var Δλ = this.radians(lon2-lon1);
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    
    return d * 0.000621371;
  }

  byJobsWithLocations = (job: Job) => {
    const firstLocation = job.locations.data[0];
    if(firstLocation && firstLocation.lat && firstLocation.lng) {
      const distance = this.getDistance(firstLocation);
      if(distance > 1.0) {
        return false;
      }
  
      return true; 
    }

    return false;    
  }
  ngOnInit() {
    this.loading = true;
    this.jobService.getJobs().subscribe((jobs) => {        
      this.locationService.getLocation((position) => {
        this.mapOrigin = this.origin = { "lat": position.coords.latitude, "lng": position.coords.longitude };
        this.results = jobs.data.filter(this.byJobsWithLocations);
      });
      this.loading = false;
    });
  }

  locateMapHere(location: Location) {
    this.mapOrigin = undefined;

    setTimeout(() => {
      this.mapOrigin = { lat: +location.lat, lng: +location.lng };
    }, 1)
  }

}
