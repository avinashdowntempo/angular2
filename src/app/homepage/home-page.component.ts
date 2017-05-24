import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  Dashboard: Boolean = true;
  Myalerts: Boolean = false;
  //clicked(Myalerts) {
  //if(Myalerts===false){
  //  Myalerts=true;
  //}
  //else
  // {
  //  object=false;
  //}
  temp: any;
  clicked(temp) {
    if (temp === 'dashboard') {
      this.Dashboard = true;
      this.Myalerts = false;
    }
    if (temp === 'myalerts')
      this.Myalerts = true;
    this.Dashboard = false;

  }
}

