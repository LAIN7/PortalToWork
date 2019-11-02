import { Injectable } from '@angular/core';
import { Job, Jobs } from './models/job';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl = 'https://jobs.api.sgf.dev/api/job';
  apiKey = '9ZGHl8yeQoaSBNUtwSlPaEJ1exTyWsRL7efirwhSlCmtGa1kCWSXgTSutK3Qqya3CchJpf2ANiiqTXP9';

  jobs: Jobs;

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Jobs>{
    if(this.jobs){
      return of(this.jobs);
    }
    return this.http.get<Jobs>(`${this.baseUrl}?api_token=${this.apiKey}`).pipe(tap(jobs => {
      this.jobs = jobs
      return jobs;
    }));
  }
}
