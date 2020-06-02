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
    path: 'isoloment',
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
    AccueilStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbCarouselModule,
  ],

  providers: [],
  bootstrap: [PagesComponent]
})
export class AppModule { }
