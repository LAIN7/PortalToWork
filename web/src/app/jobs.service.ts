import { Injectable } from '@angular/core';
import { Job, Jobs } from './models/job';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl = 'https://jobs.api.sgf.dev/api/job';
  apiKey = '9ZGHl8yeQoaSBNUtwSlPaEJ1exTyWsRL7efirwhSlCmtGa1kCWSXgTSutK3Qqya3CchJpf2ANiiqTXP9';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Jobs>{
    return this.http.get<Jobs>(`${this.baseUrl}?api_token=${this.apiKey}`);
  }
}
