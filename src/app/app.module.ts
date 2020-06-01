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
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./pages/header/header.component";
import {FooterComponent} from "./pages/footer/footer.component";
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class AppModule { }
