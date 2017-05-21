import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts = ACCOUNTS;
  advisor= ADVISOR;
  public showDetail= false;
  /*pieChartOptions =  [{
  chartType: 'PieChart',
  dataTable: [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ],
  options: {'title': 'Tasks', 'pieHole': '0.4'},
},
{
  chartType: 'PieChart',
  dataTable: [
    ['Task', 'Hours per Day'],
    ['Global Equity',     11],
    ['Canadian Equity',      2],
    ['Canadian Balanced',  2]
  ],
  options: {
    'width': '300',
    'height': '300',
    'title': 'By Asset Class',
    'pieHole': '0.4',
    'chartArea': { 'left': '5' }
    },
}];*/
 labels = ['DS', 'LD', 'EC', 'M3', 'DS Lab', 'EC Lab'];
              data = [83, 75, 67, 50, 90, 35];

              columnTypes = [{
                'type': 'string',
                'value': 'subjectName'
              },
                {
                  'type': 'number',
                  'value': 'Marks'
                }];

              chartType = 'Pie';

              options = {
                'width': 550,
                'height': 300,
                'pieHole': 0.4,
                'bars': 'vertical',
                'chartArea': { 'left': 50, 'bottom': 50, 'right': 100, 'top': 50 },
                hAxis: {
                  title: 'Subject'
                },
                vAxis: {
                  title: 'Marks'
                }
              }

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
  subaccounts: [{show: boolean; accname: String; acctype: String; mrkvalue: number; }];
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
const ACCOUNTS: Account[] = [
  { id: 189986, name: 'Dr. Robert Grewal',
  subaccounts: [{show: false, accname: '11A28865 - Self-Directed LIRA', acctype: 'Univeris Nominee', mrkvalue: 857369.92 },
  {show: false, accname: '11A28851 - SDRSP', acctype: 'Univeris Nominee', mrkvalue: 247868.61 },
  {show: false, accname: 'Open or Non-Registered', acctype: 'Univeris Client Name', mrkvalue: 129267.55 } ]},
  { id: 190549, name: 'Dr. Robert H Grewal & Mrs. Judy Grewal',
  subaccounts: [{show: false, accname: '11A28865 - Self-Directed LIRA', acctype: 'Univeris Nominee', mrkvalue: 857369.92 },
  {show: false, accname: '11A28851 - SDRSP', acctype: 'Univeris Nominee', mrkvalue: 247868.61 },
  {show: false, accname: 'Open or Non-Registered', acctype: 'Univeris Client Name', mrkvalue: 129267.55 } ]}
];