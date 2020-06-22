import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quartier} from "../model/quartier.model";

@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  private _quartier : Quartier;
  private _quartiers : Array<Quartier>;
  get quartiers(): Array<Quartier> {
    console.log(" quartiers : "+  this._quartiers);
    return this._quartiers;
  }
  set quartiers(value: Array<Quartier>) {
    this._quartiers = value;
  }
  get quartier():Quartier {
    return this._quartier;
  }
  set quartier(value) {
    this._quartier = value;
  }
  private url1 = 'http://localhost:8090/covid19-api/quartier/quartiers';
  private url2 = 'http://localhost:8090/covid19-api/quartier/id';
  constructor(private http:HttpClient) {
 }
  getAllQuartiers() {
      this.http.get<Array<Quartier>>(this.url1).subscribe(data =>{
      this.quartiers=data;
      console.log("data de quartier : "+data);
    });
  }
   updateQuartiers(id : string){
     console.log("update quartier : "+id);
     this.http.get<Array<Quartier>>(`${this.url2}/${id}`).subscribe(data =>{
       this.quartiers=data;
     });
}
///ma partie
private Url = 'http://localhost:8090/covid19-api/quartier';
  getAllQuartier():Observable<Quartier[]>{
    return this.http.get<Quartier[]>(`${this.Url}/quartiers`)
  }
}
