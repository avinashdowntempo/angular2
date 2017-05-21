import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AdvisorService } from './services/advisor.service';
import { Advisor } from './models/advisor';

@Component({
  selector: 'my-advisor',
  templateUrl: './my-advisor.component.html',
  providers: [AdvisorService]
})
export class MyAdvisorComponent implements OnInit {
    advisor: Advisor;
    constructor(private _AdvisorService: AdvisorService){}
    getAdvisor(){
      this._AdvisorService.getAdvisor().then((advisor: Advisor) => this.advisor = advisor);
        }
    ngOnInit() {
     this.getAdvisor();
   }
}
