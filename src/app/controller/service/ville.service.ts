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

export class VilleService {

  private _ville: Ville;
  private _villes: Array<Ville>;
  private _v: Ville;


  get v(): Ville {
    return this._v;
  }

  set v(value: Ville) {
    this._v = value;
  }

  get villes(): Array<Ville> {
    return this._villes;
  }

  set villes(value: Array<Ville>) {
    this._villes = value;
  }

  get ville(): Ville {
    return this._ville;
  }

  set ville(value) {
    this._ville = value;
  }


  private url1 = 'http://localhost:8090/covid19-api/ville/';
  private url2 = 'http://localhost:8090/covid19-api/ville/id';
  private url3 = 'http://localhost:8090/covid19-api/ville/nom';


  constructor(private http: HttpClient) {
  }


  getAllVilles() {
    this.http.get<Array<Ville>>(this.url1).subscribe(data => {
      this.villes = data;
      console.log("data :" + data);

    });
  }

  getVilleByNom(nom: string): Observable<Ville> {
    return this.http.get<Ville>(`${this.url3}/${nom}`);

  }
  private Url = 'http://localhost:8090/covid19-api/ville';
  getAllVille():Observable<Ville[]>{
    return this.http.get<Ville[]>(`${this.Url}/villes`)
  }

}



