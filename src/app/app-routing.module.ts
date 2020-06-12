import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HeaderComponent} from './pages/header/header.component';
import {MessageComponent} from "./pages/accueil-isolement/chat/message/message.component";

const routes: Routes = [
  {path: '', component : HeaderComponent, children : [
      {path: 'Login', component: LoginComponent },
    ] }
];

@NgModule({
    declarations: [
        MessageComponent
    ],
    exports: [
        MessageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AppRoutingModule { }
