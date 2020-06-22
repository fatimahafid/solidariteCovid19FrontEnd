import {Component, Inject, OnInit} from '@angular/core';
import {Quartier} from "../../controller/model/quartier.model";
import {Ville} from "../../controller/model/ville.model";
import {TypeService} from "../../controller/model/type-service.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Offre} from "../../controller/model/offre.model";
import {OffreService} from "../../controller/service/offre.service";
import {VilleService} from "../../controller/service/ville.service";
import {TypeServiceService} from "../../controller/service/typeService.service";
import {QuartierService} from "../../controller/service/quartier.service";

@Component({
  selector: 'app-modifieroffre',
  templateUrl: './modifieroffre.component.html',
  styleUrls: ['./modifieroffre.component.css']
})
export class ModifieroffreComponent implements OnInit {
  listVilles : Array<Ville> ;
  listQuartier: Array<Quartier>;
  listService: Array<TypeService>;
  date: Date;
  datevalid: boolean;
  get Offre(): Offre {
    return this.offreService.offre;
  }
  startDate = new Date(1990, 0, 1);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private offreService:OffreService,
              private villeService: VilleService,
              private typeService: TypeServiceService,
              private quartierService: QuartierService,){
  }
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
  changeville(data){
    console.log('v : ',data.value);
    this.Offre.ville.id = data.value;
  }
  changequartier(data){
    console.log('q : ',data.value);
    this.Offre.quartier.id = data.value;
  }
  changeservice(data) {
    this.Offre.typeService.id = data.value;
    console.log('s : ',data.value);
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
      this.Offre.dateOffre=data.value;
      console.log('status : ',data.value);
    }
  }
  public save(data){
    this.Offre.user.id = this.data.offre.user.id;
    this.Offre.id = this.data.offre.id;
  }
}


