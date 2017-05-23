import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Advisor } from '../models/advisor';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvisorHttpService {
  constructor (
    private http: Http
  ) {}

  getAdvisor() : Promise<Advisor[]>{
    return this.http.get(`http://localhost:3000/universis/advisor`)
    .map((res:Response) => res.json()).toPromise();
  }

}