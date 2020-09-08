import {Component, Inject, OnInit} from '@angular/core';
import {DemandeService} from "../../controller/service/demande.service";
import {QuartierService} from "../../controller/service/quartier.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {VilleService} from "../../controller/service/ville.service";
import {TypeService} from "../../controller/model/type-service.model";
import {TypeServiceService} from "../../controller/service/typeService.service";
import {Quartier} from "../../controller/model/quartier.model";
import {Ville} from "../../controller/model/ville.model";
import {Demande} from "../../controller/model/demande.model";

@Component({
  selector: 'app-modifierdemande',
  templateUrl: './modifierdemande.component.html',
  styleUrls: ['./modifierdemande.component.css']
})
export class ModifierdemandeComponent implements OnInit {
  listVilles : Array<Ville> ;
  listQuartier: Array<Quartier>;
  listService: Array<TypeService>;
  date: Date;
  datevalid: boolean;
  startDate = new Date(1990, 0, 1);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private demandeservice: DemandeService,
              private quartierService:QuartierService,
              private villeService:VilleService,
              private typeService:TypeServiceService) {}
  ngOnInit(): void {
    this.datevalid = true;
    this.villeService.getAllVille().subscribe(
      data=>{
        this.listVilles = data;
      }
    );
    this.typeService.getAllService().subscribe(
      data=>{
        this.listService = data;
      }
    );
    this.quartierService.getAllQuartier().subscribe(
      data=>{
        this.listQuartier=data;
      }
    );
  }
  get demande(): Demande {
    return this.demandeservice.demande;
  }
  changeville(data){
    this.demande.ville.id = data.value;
    console.log('status : ',data.value);
  }
  changequartier(data){
    this.demande.quartier.id = data.value;
    console.log('status : ',data.value);
  }
  changeservice(data) {
    this.demande.typeService.id = data.value;
    console.log('status : ',data.value);
  }
  changedate(data){
    this.date = new Date();
    this.datevalid = true;
    console.log('choisie : ',data.value);
    console.log('accteul : ',this.date);
    if(data.value < this.date){
      this.datevalid = false;
    }
    else{
      this.demande.dateDemande=data.value;
      console.log('status : ',data.value);
    }
  }
  public save(){
    this.demande.user.id = this.data.demande.user.id;
    this.demande.id = this.data.demande.id;
  }
}
