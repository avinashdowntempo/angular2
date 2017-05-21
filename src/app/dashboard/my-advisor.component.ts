import { Component } from '@angular/core';

@Component({
  selector: 'my-advisor',
  templateUrl: './my-advisor.component.html'
})
export class MyAdvisorComponent {
    advisor= ADVISOR;
}
export class Advisor {
  myadvisor: string;
  address: string;
  tel: string;
  email: string;
  display: string;
}
const ADVISOR: Advisor = {
   myadvisor: 'Neil Young',
  address: 'Edmonton Central',
  tel: 'Tel: 514-979-1200 Ext. 123',
  email: 'nyoung@mail.ca',
  display: 'https://demo.flex.univeris.com/iconnect/u/pages/advisor.page'
};
