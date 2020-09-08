import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../model/offre.model";
import {User} from "../model/user.model";
import {TypeService} from '../model/type-service.model';
import {Ville} from "../model/ville.model";
import {Quartier} from "../model/quartier.model";
import {OffreAccepte} from "../model/offre-accepte.model";
@Injectable({
  providedIn: 'root'
})

export class TypeServiceService {

  private _typeService : TypeService;
  private _typeServices: Array<TypeService>;


  get typeServices(): Array<TypeService> {
    console.log(" typeServices : "+  this._typeServices);

    return this._typeServices;
  }

  set typeServices(value: Array<TypeService>) {
    this._typeServices = value;
  }

  get typeService():TypeService {
    return this._typeService;
  }
  set typeService(value) {
    this._typeService = value;
  }



  private url1 = 'http://localhost:8090/covid19-api/typeService/';


  constructor(private http:HttpClient) {
 }


  getAllTypeServices() {
      this.http.get<Array<TypeService>>(this.url1).subscribe(data =>{
      this.typeServices=data;
      console.log("data de TypeService : "+data);
    });

  }
  private Url = 'http://localhost:8090/covid19-api/typeService';
  getAllService():Observable<TypeService[]>{
    return this.http.get<TypeService[]>(`${this.Url}/services`)
  }



}
