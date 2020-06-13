import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ChatComponent } from './pages/accueil-isolement/chat/chat.component';
import { UsersComponent } from './pages/accueil-isolement/chat/users/users.component';
import { RoomChatComponent } from './pages/accueil-isolement/chat/room-chat/room-chat.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import {ProfileComponent} from "./pages/profile/profile.component";
import {MessageComponent} from "./pages/accueil-isolement/chat/message/message.component";
import { EnseignementEtudComponent } from './pages/enseignement-etud/enseignement-etud.component';
import { EnseignementCreateurComponent } from './pages/enseignement-createur/enseignement-createur.component';
import { EnseignementListMescoursComponent } from './pages/enseignement-list-mescours/enseignement-list-mescours.component';
import { EnseignementForumComponent } from './pages/enseignement-forum/enseignement-forum.component';
const routes: Routes = [
  {
    path: 'enseignement/createur/mescours',
    component: EnseignementListMescoursComponent
  },
  {
    path: 'enseignement/createur',
    component: EnseignementCreateurComponent
  },
  {
    path: 'enseignement/createur/mescours/createurs',
    component: EnseignementCreateurComponent
  },
  {
    path: 'enseignement/etudiant',
    component: EnseignementEtudComponent
  },
  {
    path: 'enseignement/etudiant/cours',
    component: EnseignementEtudComponent
  },
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
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'edit_profile',
    component: EditProfileComponent
  },
  {
    path: 'message',
    component: MessageComponent
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
    ChatComponent,
    UsersComponent,
    RoomChatComponent,
    ProfileComponent,
    EditProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbCarouselModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class AppModule { }
