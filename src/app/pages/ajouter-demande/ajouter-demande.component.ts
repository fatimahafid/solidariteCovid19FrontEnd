import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Ville} from '../../controller/model/ville.model';
import {Quartier} from '../../controller/model/quartier.model';
import {OffreService} from '../../controller/service/offre.service';
import {QuartierService} from '../../controller/service/quartier.service';
import {VilleService} from '../../controller/service/ville.service';
import {TypeServiceService} from '../../controller/service/typeService.service';
import {Offre} from '../../controller/model/offre.model';
import {TypeService} from '../../controller/model/type-service.model';
import {DemandeService} from '../../controller/service/demande.service';
import {Demande} from '../../controller/model/demande.model';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ajouter-demande',
  templateUrl: './ajouter-demande.component.html',
  styleUrls: ['./ajouter-demande.component.css']
})


export class AjouterDemandeComponent implements OnInit {

  private _ville: Ville;
  private _quartier: Quartier;
  private _selectedville: string;
  private _selectedquartier: string;
  private _selectedtypeservice: string;
  private _selecteddate: string;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private demandeService: DemandeService, private quartierService: QuartierService, private villeService: VilleService, private typeServiceService: TypeServiceService) { }

  ngOnInit(): void {
    this.getAllVilles();
    this.getAllTypeServices();
    console.log('init ajouter');

  }

  public  get demande(): Demande {
    return this.demandeService.demande;
  }


  get selecteddate(): string {
    return this._selecteddate;
  }

  set selecteddate(value: string) {
    this._selecteddate = value;
  }

  get selectedville(): string {
    return this._selectedville;
  }

  set selectedville(value: string) {
    this._selectedville = value;
  }

  public  get quartiers(): Array<Quartier> {
    return this.quartierService.quartiers;

  }

  public  get villes(): Array<Ville> {
    return this.villeService.villes;

  } public  get typeServices(): Array<TypeService> {
    return this.typeServiceService.typeServices;

  }


  get ville(): Ville {
    return this.villeService.ville;

  }



  get quartier(): Quartier {
    return this.quartierService.quartier;
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


  get selectedquartier(): string {
    return this._selectedquartier;
  }

  set selectedquartier(value: string) {
    this._selectedquartier = value;
  }

  get selectedtypeservice(): string {
    return this._selectedtypeservice;
  }

  set selectedtypeservice(value: string) {
    this._selectedtypeservice = value;
  }

  public filterSubById(event) {
    let newVal: string;
    newVal = event.target.value;

    const toArray =  newVal.split(':');
    this.quartierService.updateQuartiers(toArray[1]);
    this.selectedville = toArray[1];
    console.log(this.selectedville);

  }

  getselectedquartier(event)
  {
    let newVal: string;
    newVal = event.target.value;
    const toArray =  newVal.split(':');
    this.selectedquartier = toArray[1];
    console.log(this.selectedquartier);
  }
  getselectedtypeservice(event)
  {
    let newVal: string;
    newVal = event.target.value;
    const toArray =  newVal.split(':');
    this.selectedtypeservice = toArray[1];
    console.log(this.selectedtypeservice);
  }

  save() {

    this.demandeService.save(this.selectedville, this.selectedquartier, this.selectedtypeservice);
    console.log(this.demandeService.demande + 'aaaaaaaaaaaaaaa');

  }


  parseDate(event) {
    let  newVal: Date;
    newVal = event.target.value;
    this._selecteddate;
    console.log(this._selecteddate + 'this is a test for date');
  }
}
