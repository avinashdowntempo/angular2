import { Component } from '@angular/core';
import { AdvisorService } from './services/advisor.service';
import { Advisor } from './models/advisor';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-advisor',
  templateUrl: './my-advisor.component.html',
  providers: [AdvisorService]
})
export class MyAdvisorComponent implements OnInit {
    advisor: Advisor;
		
    constructor(private _advisorService: AdvisorService){}
   getAdvisor(){
	  this.advisor={myadvisor:'',address:'',tel:'',email:'',display:''}; //default advisor when data not fetched
	  this._advisorService.getAdvisor().then((advisor: Advisor) => this.advisor = advisor);
	 console.log(this.advisor);
		}
    ngOnInit() {	
    this.getAdvisor();
	  console.log(this.advisor);
  }
}
