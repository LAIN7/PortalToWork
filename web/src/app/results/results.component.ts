import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results: String[] = [
    'Example',
    'Another '
  ];

  constructor(private jobService: JobsService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe((jobs) => {
      this.results = jobs.data.map(job=>job.title);
    });
  }

}
