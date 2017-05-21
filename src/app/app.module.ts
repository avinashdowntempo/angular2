import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2GoogleChartModule } from 'ng2-googlechart';
import { AppComponent } from './app.component';
import {AccountListComponent} from './dashboard/account-list.component';
import {MyAdvisorComponent} from './dashboard/my-advisor.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    MyAdvisorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2GoogleChartModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
