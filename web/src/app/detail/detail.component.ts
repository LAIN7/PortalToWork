import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  lat = 37.2119519;
  lng = -93.290407;

  job: Job;

  hideDescription = true;
  constructor(private route: ActivatedRoute, private jobService:JobsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jobService.getJobs().subscribe(jobs => {
        const foundJobs = jobs.data.filter(x=>x.id == params.id)
        this.job = foundJobs[0];
      });
    })
  }

  toggleDescription() {
    this.hideDescription = !this.hideDescription;
  }
}
