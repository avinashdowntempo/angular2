import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountHttpService {
  constructor (
    private http: Http
  ) {}

  getAccounts() {
    return this.http.get(`http://localhost:3000/universis`)
    .map((res:Response) => res.json());
  }

}