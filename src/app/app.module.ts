import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2GoogleChartModule } from 'ng2-googlechart';
import { AppComponent } from './app.component';
import {AccountListComponent} from './homepage/dashboard/account-list.component';
import {MyAdvisorComponent} from './homepage/dashboard/my-advisor.component';
import {MapShowComponent} from './homepage/dashboard/map-show.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homepage/home-page.component';
import { AccountDetailsComponent} from './accountdetails/account-details.component';
import { MyProfileComponent} from './myprofile/my-profile.component';
import { DocumentPageComponent} from './documents/document-page.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { PageUnderConstructionComponent } from './errors/page-under-construction.component';
import { MyAlertsComponent } from './homepage/myalerts/my-alerts.component';
import { DashboardContainerComponent } from './homepage/dashboard/dashboard-container.component';

const appRoutes: Routes = [
  { path: 'HOME', component: HomePageComponent, children: [
      { path: '', redirectTo: 'DASHBOARD', pathMatch: 'full' },
      { path: 'DASHBOARD', component: DashboardContainerComponent },
      { path: 'MYALERTS', component: MyAlertsComponent },
      { path: '**', redirectTo: 'DASHBOARD', pathMatch: 'full' }
    ]},
  { path: 'ACCOUNTDETAILS', component: AccountDetailsComponent },
  { path: 'MYPROFILE', component: MyProfileComponent },
  { path: 'DOCUMENTS', component: DocumentPageComponent },
  { path: 'APPROVALS', component: PageUnderConstructionComponent },
  { path: '', redirectTo: 'HOME', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    MyAdvisorComponent,
    MapShowComponent,
    HomePageComponent,
    MyProfileComponent,
    AccountDetailsComponent,
    DocumentPageComponent,
    PageNotFoundComponent,
    PageUnderConstructionComponent,
    MyAlertsComponent,
    DashboardContainerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    Ng2GoogleChartModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
