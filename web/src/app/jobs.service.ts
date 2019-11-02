import { Injectable } from '@angular/core';
import { Job } from './models/job';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }
  getJobs(): Observable<Job[]>{
    return this.http.get<Job>("https://jobs.api.sgf.dev/api/job?api_token=9ZGHl8yeQoaSBNUtwSlPaEJ1exTyWsRL7efirwhSlCmtGa1kCWSXgTSutK3Qqya3CchJpf2ANiiqTXP9");
  }
}
