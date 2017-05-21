import { Component } from '@angular/core';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  accounts = ACCOUNTS;
  onSelect(mod) {
    if ( mod.show === false){
      mod.show = true;
    }else {
      mod.show = false;
    }
  }
}
export class Account {
  name: string;
  id: number;
  subaccounts: [{data: number[]; labels: String[]; show: boolean; accname: String; acctype: String; mrkvalue: number; }];
}
const ACCOUNTS: Account[] = [
  { id: 189986, name: 'Dr. Robert Grewal',
  subaccounts: [{data: [41.93, 35.09, 22.99], labels: ['Global Equity', 'Canadian Equity', 'Canadian Balanced'], show: false, accname: '11A28865 - Self-Directed LIRA', acctype: 'Univeris Nominee', mrkvalue: 857369.92 },
  {data: [42.75, 21.6, 35.65], labels: ['Global Equity', 'Canadian Equity', 'Canadian Balanced'], show: false, accname: '11A28851 - SDRSP', acctype: 'Univeris Nominee', mrkvalue: 247868.61 },
  {data: [100], labels: ['Canadian Balanced'], show: false, accname: 'Open or Non-Registered', acctype: 'Univeris Client Name', mrkvalue: 129267.55 } ]},
  { id: 190549, name: 'Dr. Robert H Grewal & Mrs. Judy Grewal',
  subaccounts: [{data: [63.02, 26.67, 10.31], labels: ['Global Equity', 'Canadian Equity', 'U.S.Equity'], show: false, accname: '11A28865 - Self-Directed LIRA', acctype: 'Univeris Nominee', mrkvalue: 857369.92 },
  {data: [42.75, 21.6, 35.65], labels: ['Global Equity', 'Canadian Equity', 'Canadian Balanced'], show: false, accname: '11A28851 - SDRSP', acctype: 'Univeris Nominee', mrkvalue: 247868.61 },
  {data: [100,50], labels: ['Canadian Balanced','U.S.Equity'], show: false, accname: 'Open or Non-Registered', acctype: 'Univeris Client Name', mrkvalue: 129267.55 } ]}
];

