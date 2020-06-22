import {Component, OnInit, Directive, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs";
import {OffreAccepte} from "../../controller/model/offre-accepte.model";
import {UserService} from "../../controller/service/user.service";
import {User} from "../../controller/model/user.model";
import {Router} from "@angular/router";
import {OffreAccepteService} from "../../controller/service/offreAccepte.service";

@Component({
  selector: 'app-mesparticipations',
  templateUrl: './mesparticipations.component.html',
  styleUrls: ['./mesparticipations.component.css']
})
export class MesparticipationsComponent implements OnInit {
  id_user: number;
  get participants(): OffreAccepte[] {
    return this._participants;
  }

  set participants(value: OffreAccepte[]) {
    this._participants = value;
  }

  offresaccepter: OffreAccepte[];
  user_profiteur: User;
  const
  _participants = new Array<OffreAccepte>();
  nbr_participants: number = 0;
  constructor(private offreAccepteService: OffreAccepteService, private userservice: UserService,private router: Router) {
    this.nbr_participants = 0;
  }
  ngOnInit(): void {
    this.nbr_participants = 0;
    // @ts-ignore
    this.id_user = localStorage.getItem('id');
    this.getUser( this.id_user);
    this.getUserOffresAccepter( this.id_user)
  }
  getUser(id: number) {
    this.userservice.getUser(id).subscribe(
      data => {
        console.log('profiteur :', data)
        this.user_profiteur = data;
      }, error => {
      }
    );
  }
  deleteUsreOffre(id: number) {
    this.offreAccepteService.deleteUserOffre(id).subscribe(
      data => {
        if (data == 1) {
          console.log('supprimer :', data)
          this.ngOnInit();
        }
      }, error => {
        console.log('erruer :', error)
      }
    );
  }
  getUserOffresAccepter(id: number) {
    this.offreAccepteService.getUserOffresAccepter(id).subscribe(
      data => {
        this.offresaccepter = data;
        console.log('offre',data);
        for(let ff of  this.offresaccepter ){
          this.getcountParticipants(ff.offres.id);
        }
      }, error => {
        console.log('errure offreaccepte : ',error);
      }
    );
  }
  getParticipants(id: number) {
    this.offreAccepteService.getParticipants(id).subscribe(
      data => {
        this.participants = data;
      }, error => {
      }
    );
  }
  getcountParticipants(id: number) {
    this.offreAccepteService.getcountParticipants(id).subscribe(
      data => {
        this.nbr_participants += data.length;
        console.log('this.participants', this.nbr_participants);
      }, error => {
      }
    );
  }
}
