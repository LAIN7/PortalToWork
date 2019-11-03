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
  constructor(private jobService: JobsService, private locationService: LocationService) { }

  byJobsWithLocations(job: Job): boolean {
    return job.locations.data.length > 0 && !!job.locations.data[0].lat && !!job.locations.data[0].lng;
  }
  ngOnInit() {
    this.locationService.getLocation((position) => {
      this.origin = { "lat": position.coords.latitude, "lng": position.coords.longitude };
    });
    this.loading = true;
    this.jobService.getJobs().subscribe((jobs) => {
      this.results = jobs.data.filter(this.byJobsWithLocations);
      this.loading = false;
    });
  }

  locateMapHere(location: Location) {
    this.origin = undefined;

    setTimeout(() => {
      this.origin = { lat: +location.lat, lng: +location.lng };
    }, 1)
  }

}
