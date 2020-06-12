import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccueilIsolementComponent } from './pages/accueil-isolement/accueil-isolement.component';
import { AccueilEnseignementComponent } from './pages/accueil-enseignement/accueil-enseignement.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AccueilVoisinageComponent } from './pages/accueil-voisinage/accueil-voisinage.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import {IsolementBodyComponent} from './pages/accueil-isolement/isolement-body/isolement-body.component';
import {IsolementHeadComponent} from './pages/accueil-isolement/isolement-head/isolement-head.component';
import {IsolementCarouselComponent} from './pages/accueil-isolement/isolement-carousel/isolement-carousel.component';
import {IsolementCommancerComponent} from './pages/accueil-isolement/isolement-commancer/isolement-commancer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { AccueilStatisticsComponent } from './pages/accueil-statistics/accueil-statistics.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DatePipe} from "@angular/common";
import {User} from "./controller/model/user.model";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { NosStatComponent } from './pages/nos-stat/nos-stat.component';
import { NgApexchartsModule } from "ng-apexcharts";


const routes: Routes = [
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'voisinage',
    component: AccueilVoisinageComponent
  },
  {
    path: 'isolement',
    component: AccueilIsolementComponent
  },
  {
    path: 'enseignement',
    component: AccueilEnseignementComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'statistics',
    component: AccueilStatisticsComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'nos_stat',
    component: NosStatComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomePageComponent,
    AccueilIsolementComponent,
    AccueilEnseignementComponent,
    LoginComponent,
    InscriptionComponent,
    AccueilVoisinageComponent,
    HeaderComponent,
    FooterComponent,
    IsolementBodyComponent,
    IsolementHeadComponent,
    IsolementCarouselComponent,
    IsolementCommancerComponent,
    AccueilStatisticsComponent,
    NosStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbCarouselModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    ChartModule,
    NgApexchartsModule,
],

  providers: [DatePipe,User,CategoryService, LineSeriesService],
  bootstrap: [PagesComponent]
})
export class AppModule { }
