import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';
import { Job } from '../models/job';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  job: Job;
  showMap: boolean = false;
  origin: any;
  destination = 'efactory';
  mapsQuery = 'efactory';
  
  hideDescription = true;
  constructor(private route: ActivatedRoute,
    private jobService: JobsService,
    private locationService: LocationService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.route.params.subscribe(params => {
      this.jobService.getJobs().subscribe(jobs => {
        const foundJobs = jobs.data.filter(x=>x.id == params.id)
        this.job = foundJobs[0];
      });
    })

    if (this.job.locations.data.length > 0){
      this.destination = `${this.job.locations.data[0].street}, ${this.job.locations.data[0].city}, ${this.job.locations.data[0].state} ${this.job.locations.data[0].zipcode}`;
      this.mapsQuery = this.destination.split(" ").join("+")

      this.locationService.getLocation((position) => {
        this.origin = { "lat": position.coords.latitude, "lng": position.coords.longitude };
        this.showMap = true;
      });
      console.log(this.job.locations.data)
    }
  }
  

  toggleDescription() {
    this.hideDescription = !this.hideDescription;
  }
}
