import { Component, OnInit, Input } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  curLocation: string = "somewhere, USA";
  results: Job[] = [];
  loading = false;

  constructor(private jobService: JobsService) { }

  ngOnInit() {
    this.loading = true;
    this.jobService.getJobs().subscribe((jobs) => {
      this.results = jobs.data;
      this.loading = false;
    });
  }

}
