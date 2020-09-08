import { Component, OnInit } from '@angular/core';
import {User} from "../../controller/model/user.model";
import {Demande} from "../../controller/model/demande.model";
import {DemandeService} from "../../controller/service/demande.service";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../controller/service/user.service";
import {ModifierdemandeComponent} from "../modifierdemande/modifierdemande.component";

@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css']
})
export class MesdemandesComponent implements OnInit {

  user_demandeur:User;
  demandefaites: Demande[];
  nbr_repondeur: number = 0;
  accepteur: Demande;
  id_user: number;
  constructor(private demandesevice:DemandeService,private userservice: UserService,public dialog: MatDialog) {
  }
  get demande(){
    return this.demandesevice.demande;
  }
  ngOnInit(): void {
    // @ts-ignore
    this.id_user = localStorage.getItem('id');
    this.userservice.getUser(this.id_user).subscribe(
      data=>{
        this.user_demandeur =data;
      },error => {
        console.log('erreur user')
      }
    );
    this.nbr_repondeur = 0;
    this.getdemande(this.id_user);
  }
  deleteUsreDemande(id:number){
    this.demandesevice.deleteUsreDemande(id).subscribe(
      data=>{
        console.log('demande supprimer');
        this.ngOnInit();
      },error => {
        console.log('erreur supprition');
      }
    );
  }
  getdemande(id: number){
    this.demandesevice.getdemande(id).subscribe(
      data=>{
        this.demandefaites = data;

        for(let dd of this.demandefaites){
          if(dd.isAccepted == true){
            this.nbr_repondeur+=1;
            // this.getaccepteur(dd.id);
          }
        }
        console.log('ddddd:',this.demandefaites);
      }
    );
  }
  openDialog(demande : Demande): void {
    const dialogRef = this.dialog.open(ModifierdemandeComponent, {
      width: '400px',
      data: {
        titre: 'Modifier Demande',
        txt_btn: 'save',
        demande:demande,
      },
      panelClass: 'mypopup'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.demandesevice.save2();
      this.demandesevice.demande = null;
      this.ngOnInit();
    });
  }
  demandedone(demande: Demande){
    if(demande.isAccepted == false){
      demande.etat = "notyet";
    }
    else{
      if( demande.etat == 'done' ){
        demande.etat = "notyet";
      }else if( demande.etat == 'notyet'){
        demande.etat = "done";
      }
    }
    console.log('gggggggggggggggggggg',demande.etat);
    this.demandesevice.updatememande(demande);
  }
}
