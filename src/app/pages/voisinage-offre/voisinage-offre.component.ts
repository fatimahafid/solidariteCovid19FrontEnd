import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AjouteroffreComponent} from '../ajouteroffre/ajouteroffre.component';
import {Router} from "@angular/router";
import {OffreService} from "../../controller/service/offre.service";
import {Offre} from "../../controller/model/offre.model";
import {Observable} from "rxjs";
import {User} from "../../controller/model/user.model";
import {Ville} from "../../controller/model/ville.model";
import {TypeService} from "../../controller/model/type-service.model";
import {Quartier} from "../../controller/model/quartier.model";
import {OffreAccepte} from "../../controller/model/offre-accepte.model";
import {QuartierService} from "../../controller/service/quartier.service";
import {VilleService} from "../../controller/service/ville.service";
import {TypeServiceService} from "../../controller/service/typeService.service";
import {OffreAccepteService} from "../../controller/service/offreAccepte.service";

@Component({
  selector: 'app-voisinage-offre',
  templateUrl: './voisinage-offre.component.html',
  styleUrls: ['./voisinage-offre.component.css']
})
export class VoisinageOffreComponent implements OnInit {
  private _ville: Ville;
  private _quartier : Quartier;

 private _participations : Array<OffreAccepte>;
  constructor(public dialog: MatDialog,private router: Router,private offreService : OffreService,private offreAccepteService : OffreAccepteService
,private quartierService : QuartierService,private villeService : VilleService,private typeServiceService : TypeServiceService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AjouteroffreComponent, {
      width: '400px',
      height:'650px',

      data: {titre: 'Ajouter une offre'},
      panelClass: 'mypopup'

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  @Output() NgForOnCreateDirective: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    this.NgForOnCreateDirective.emit('dummy');
    this.offreService.getAlloffres()
    this.getAllVilles();
    //this.getAllQuartiers();
    this.getAllTypeServices();}

  public  getAlloffres() {
     this.offreService.getAlloffres();

  }
  public get offres(): Array<Offre>{
    return this.offreService.offres;
  }

  get user(): User {
    return this.offreService.user;
  }


  get ville() :Ville {
   return  this.offreService.ville;
  }
  get typeservice():TypeService {
    return this.offreService.typeservice;
  }

  get quartier(): Quartier {
    return this.offreService.quartier;
  }


  get participations(): Array<OffreAccepte> {

    return this.offreService.participations;
  }


  set participations(value: Array<OffreAccepte>) {
    this._participations = value;
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

  public  getAllQuartiers(){
    return this.quartierService.getAllQuartiers();
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

  getparticipant(id: number): Array<OffreAccepte>{

    this.participations= this.offreService.getparticipant(id);
    console.log(this.participations+"participaaaant");
    return this.participations;

  }

  getOffreByville(id){
    console.log(id);
    this.quartierService.updateQuartiers(id);
    this.offreService.  getoffrebyville(id);

  }
  getOffreByquartier(nom){
    console.log(nom);
    this.offreService.getoffrebyquartier(nom);

  }
  getOffreBytypeservice(libelle){
    console.log(libelle);
    this.offreService.getoffrebytypeservice(libelle);

  }
  participer(idoffre){
    console.log("participer");
    this.offreAccepteService.save(1,idoffre);
  }
}


