import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvisorHttpService {
  constructor (
    private http: Http
  ) {}

  getAdvisor() {
    return this.http.get(`http://localhost:3000/universis/advisor`)
    .map((res:Response) => res.json());
  }

}