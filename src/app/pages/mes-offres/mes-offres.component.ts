import { Component, OnInit } from '@angular/core';
import {User} from "../../controller/model/user.model";
import {OffreAccepte} from "../../controller/model/offre-accepte.model";
import {ModifieroffreComponent} from "../modifieroffre/modifieroffre.component";
import {Offre} from "../../controller/model/offre.model";
import {OffreAccepteService} from "../../controller/service/offreAccepte.service";
import {UserService} from "../../controller/service/user.service";
import {OffreService} from "../../controller/service/offre.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-mes-offres',
  templateUrl: './mes-offres.component.html',
  styleUrls: ['./mes-offres.component.css']
})
export class MesOffresComponent implements OnInit {

  exist: boolean = false;
  offresPublier: Offre[];
  user_publieur: User;
  users_proffiteur: Array<User>;
  nbr_participants: number = 0;
  id_user: number;

  get offreAccepte(): OffreAccepte {
    return this.offreaccepteservice.offreAccepte;
  }
  get offre(): Offre {
    return this.offreService.offre;
  }
  constructor(private offreaccepteservice: OffreAccepteService,
              private userservice: UserService,
              private offreService: OffreService,
              public dialog: MatDialog,
              ) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.id_user = localStorage.getItem('id');
    this.userservice.getUser(this.id_user).subscribe(
      data=>{
        this.user_publieur =data;
        this.nbr_participants = 0;
      },error => {
        console.log('erreur user')
      }
    );
    this.getOffre(this.id_user);
  }
  getOffre(id: number){
    this.offreService.getOffre2(id).subscribe(
      data=>{
        this.offresPublier = data;
        for(let offre of this.offresPublier){
          this.getcountParticipants(offre.id);
        }
        console.log('offre',data);
      },erreur=>{
        console.log(erreur);
      }
    );
  }
  getParticipants(id: number) {
    this.offreaccepteservice.getParticipants(id).subscribe(
      data=>{
        this.users_proffiteur = this.clone(data);
      },error => {
      }
    );
  }
  getcountParticipants(id: number) {
    this.offreaccepteservice.getParticipants(id).subscribe(
      data=>{
        this.nbr_participants+= data.length;
      },error => {

      }
    );
  }
  deleteUsreOffre(id: number) {
    this.offreService.deleteUsreOffre(id).subscribe(
      data => {
        if (data == 1) {
          this.ngOnInit();
        }
      }, error => {
        console.log('erruer :', error)
      }
    );
  }
  openDialog(offre : Offre): void {
    const dialogRef = this.dialog.open(ModifieroffreComponent, {
      width: '400px',
      data: {
        titre: 'Modifier Offre',
        txt_btn: 'save',
        offre:offre,
      },
      panelClass: 'mypopup'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('info offre',this.offre);
      this.offreService.save2(this.offre).subscribe(
        data=>{
          this.ngOnInit();
        },error => {
          console.log('erruer',error);
        }
      );
    });
    // @ts-ignore
    this.offre = null;
  }
  clone(offreaccepte: Array<OffreAccepte>): Array<User>{
    const f = new Array<User>();
    for(let t of offreaccepte){
      f.push(t.user);
    }
    return  f;
  }

}
