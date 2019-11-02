import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;
  constructor(private jobService: JobsService){}
  ngOnInit(){
    this.loading = true;
    this.jobService.getJobs().subscribe((jobs) => {
      this.loading = false;
    });
  }
}
