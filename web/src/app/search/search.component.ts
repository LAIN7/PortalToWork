import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  origin: any;
  constructor(private jobService: JobsService, private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocation((position) => {
      this.origin = { "lat": position.coords.latitude, "lng": position.coords.longitude };
    });
  }

}
