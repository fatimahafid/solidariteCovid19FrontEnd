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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';
import {User} from './controller/model/user.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { NosStatComponent } from './pages/nos-stat/nos-stat.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EnseignementEtudComponent } from './pages/enseignement-etud/enseignement-etud.component';
import { EnseignementCreateurComponent } from './pages/enseignement-createur/enseignement-createur.component';
import { EnseignementListMescoursComponent } from './pages/enseignement-list-mescours/enseignement-list-mescours.component';
import { EnseignementForumComponent } from './pages/enseignement-forum/enseignement-forum.component';
import {ChatComponent} from './pages/accueil-isolement/chat/chat.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {RoomChatComponent} from './pages/accueil-isolement/chat/room-chat/room-chat.component';
import {MessageComponent} from './pages/accueil-isolement/chat/message/message.component';
import {UsersComponent} from './pages/accueil-isolement/chat/users/users.component';
import {EditProfileComponent} from './pages/edit-profile/edit-profile.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import { IsolementComponent } from './pages/isolement/isolement.component';
import { VoisinageOffreComponent } from './pages/voisinage-offre/voisinage-offre.component';
import { VoisinageDemandesComponent } from './pages/voisinage-demandes/voisinage-demandes.component';
import { AjouteroffreComponent } from './pages/ajouteroffre/ajouteroffre.component';
import { AjouterDemandeComponent } from './pages/ajouter-demande/ajouter-demande.component';
import { MesOffresComponent } from './pages/mes-offres/mes-offres.component';
import { MesparticipationsComponent } from './pages/mesparticipations/mesparticipations.component';
import { MesdemandesComponent } from './pages/mesdemandes/mesdemandes.component';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostComponent } from './pages/isolement/post/post.component';
import {MatRadioModule} from '@angular/material/radio';
import {TypeStatut} from './controller/model/type-statut.model';
import {CommentaireStatut} from './controller/model/commentaire-statut.model';
import { ModifieroffreComponent } from './pages/modifieroffre/modifieroffre.component';
import { ModifierdemandeComponent } from './pages/modifierdemande/modifierdemande.component';
import {MatIconModule} from "@angular/material/icon";



const routes: Routes = [
  {
    path: 'enseignement/createur/mescours',
    component: EnseignementListMescoursComponent
  },
  {
    path: 'enseignement/createur/mescours/forum',
    component: EnseignementForumComponent
  },
  {
    path: 'enseignement/createur/mescours/forum/enseignement',
    component: AccueilEnseignementComponent
  },
  {
    path: 'enseignement/createur/forum',
    component: EnseignementForumComponent
  },
  {
    path: 'enseignement/createur/forum/enseignement',
    component: AccueilEnseignementComponent
  },

  {
    path: 'inscription',
    component: InscriptionComponent
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
    path: 'enseignement/etudiant/cours/forum',
    component: EnseignementForumComponent
  },
  {
    path: 'enseignement/etudiant/cours/forum/enseignement',
    component: AccueilEnseignementComponent
  },
  {
    path: 'enseignement/etudiant/forum',
    component: EnseignementForumComponent
  },
  {
    path: 'enseignement/etudiant/forum/enseignement',
    component: AccueilEnseignementComponent
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
    path: 'statistics/nos_stat',
    component: NosStatComponent
  },
  {
    path: 'profile/chat',
    component: ChatComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'editprofile',
    component: EditProfileComponent
  },
  {
    path: 'voisinage/offres/mesoffres',
    component: MesOffresComponent

  },
  {
    path: 'voisinage/offres',
    component: VoisinageOffreComponent
  },
  {
    path: 'voisinage/offres/mesparticipations',
    component: MesparticipationsComponent

  },
  {
    path: 'isolement/isolement',
    component: IsolementComponent

  },
  {
    path: 'voisinage/demandes',
    component: VoisinageDemandesComponent

  },
  {
    path: 'voisinage/demandes/mesdemandes',
    component: MesdemandesComponent

  },
  {
    path: 'voisinage/demandes/offres',
    component: VoisinageOffreComponent

  },
  {
    path: 'voisinage/offres/demandes',
    component: VoisinageDemandesComponent

  },
  {
    path: 'voisinage/offres/demandes/offres',
    component: VoisinageOffreComponent

  },
  {
    path: 'voisinage/demandes/offres/demandes',
    component: VoisinageDemandesComponent

  },
  {
    path: '',
    component: HomePageComponent
  }
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
    NosStatComponent,
    EnseignementEtudComponent,
    EnseignementCreateurComponent,
    EnseignementListMescoursComponent,
    EnseignementForumComponent,
    RoomChatComponent,
    UsersComponent,
    ChatComponent,
    ProfileComponent,
    EditProfileComponent,
    MessageComponent,
    IsolementComponent,
    VoisinageOffreComponent,
    VoisinageDemandesComponent,
    AjouteroffreComponent,
    AjouterDemandeComponent,
    MesOffresComponent,
    MesparticipationsComponent,
    MesdemandesComponent,
    PostComponent,
    ModifieroffreComponent,
    ModifierdemandeComponent,
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
    MatStepperModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MatIconModule
  ],

  providers: [DatePipe, User, CategoryService, LineSeriesService, TypeStatut, CommentaireStatut],
  bootstrap: [PagesComponent]
})
export class AppModule { }
