import { Component, OnInit } from '@angular/core';
import { AjouterDemandeComponent } from '../ajouter-demande/ajouter-demande.component';
import {MatDialog} from '@angular/material/dialog';
import {OffreService} from "../../controller/service/offre.service";
import {DemandeService} from "../../controller/service/demande.service";
import {QuartierService} from "../../controller/service/quartier.service";
import {VilleService} from "../../controller/service/ville.service";
import {TypeServiceService} from "../../controller/service/typeService.service";
import {Offre} from "../../controller/model/offre.model";
import {Demande} from "../../controller/model/demande.model";
import {Quartier} from "../../controller/model/quartier.model";
import {Ville} from "../../controller/model/ville.model";
import {TypeService} from "../../controller/model/type-service.model";
import {User} from '../../controller/model/user.model';
import {UserService} from '../../controller/service/user.service';

@Component({
  selector: 'app-voisinage-demandes',
  templateUrl: './voisinage-demandes.component.html',
  styleUrls: ['./voisinage-demandes.component.css']
})
export class VoisinageDemandesComponent implements OnInit {
  me: User;

  constructor(private userService: UserService,public dialog: MatDialog,private demandeService : DemandeService,private quartierService : QuartierService,private villeService : VilleService,private typeServiceService : TypeServiceService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjouterDemandeComponent, {
      width: '400px',
      data: {titre: 'Ajouter une Demande'},
      panelClass: 'mypopup'

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.getAlldemande();
    this.getAllVilles();
    this.getAllTypeServices();
    this.getAllTypeServices();
    this.getuser();


  }

  getuser() {
    this.userService.getUser(+localStorage.getItem('id')).subscribe(
      response => {
        this.me = response;
      }
    );
  }

  public  get quartiers() : Array<Quartier> {
    return this.quartierService.quartiers;

  }

  public  get villes() : Array<Ville> {
    return this.villeService.villes;

  }
  public  get typeServices() : Array<TypeService> {
    return this.typeServiceService.typeServices;

  }

  public getAllVilles(){
    return this.villeService.getAllVilles();
  }

  public  getAlldemande() {
    this.demandeService.getAllDemande();

  }
  public get demandes(): Array<Demande>{
    console.log(this.demandeService.demandes+"liste demande");

    return this.demandeService.demandes;
  }
  public  getAllTypeServices(){
    return this.typeServiceService.getAllTypeServices();
  }

  public filterSubById(event) {

    let newVal :string;
    newVal= event.target.value;

    let toArray =  newVal.split(":");
    this.quartierService.updateQuartiers(toArray[1]);
  }


  getdemandeByville(id){
    console.log(id);
    this.quartierService.updateQuartiers(id);
    this.demandeService.getdemandebyville(id);

  }
  getdemandeByquartier(nom){
    console.log(nom);
    this.demandeService.getdemandebyquartier(nom);

  }
  getdemandeBytypeservice(libelle){
    console.log(libelle);
    this.demandeService.getdemandebytypeservice(libelle);

  }

  haveparticipant(id) :boolean{
    if (id==null)
      return true;
    else
      return false;

}

participer(d :Demande){
  console.log("participer" +d.id);
  this.demandeService.participer(1,d);
}
}
