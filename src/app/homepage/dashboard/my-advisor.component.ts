import { Component } from '@angular/core';
import { AdvisorHttpService } from './services/advisor-http.service';
import { Advisor } from './models/advisor';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-advisor',
  templateUrl: './my-advisor.component.html',
  providers: [AdvisorHttpService]
})
export class MyAdvisorComponent implements OnInit {
    advisor: Advisor[];
		
    constructor(private _advisorHttpService: AdvisorHttpService){}
   getAdvisor(){
	   //default advisor when data not fetched
      this.advisor=[{myadvisor:'boom',address:'',tel:'',email:'',display:''}];
         this._advisorHttpService.getAdvisor().then(data => this.advisor = data);
    //this._advisorHttpService.getAdvisor().subscribe(data => this.advisor = data);
	 console.log(this.advisor);
		}
    ngOnInit() {     
    this.getAdvisor();
  }
}
