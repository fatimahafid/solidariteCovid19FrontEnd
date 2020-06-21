import { Injectable } from '@angular/core';
import {SousCategorie} from "../model/sousCategorie.model";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {

  private _sousCategorie : SousCategorie;
  private _sousCategories : Array<SousCategorie>;


  get sousCategories(): Array<SousCategorie> {
    console.log(" sousCategories : "+  this._sousCategories);

    return this._sousCategories;
  }

  set sousCategories(value: Array<SousCategorie>) {
    this._sousCategories = value;
  }

  get sousCategorie():SousCategorie {
    return this._sousCategorie;
  }
  set sousCategorie(value) {
    this._sousCategorie = value;
  }



  private url1 = 'http://localhost:8090/api/souscategorie/';
  private url2 = 'http://localhost:8090/api/souscategorie/categorie/id';


  constructor(private http:HttpClient) {
  }


  getAllSousCategories() {
    this.http.get<Array<SousCategorie>>(this.url1).subscribe(data =>{
      this.sousCategories=data;
      console.log("data de sousCategorie : "+data);
    });

  }

  updateSousCategories(id : string){
    console.log("update sousCategorie : "+id);
    this.http.get<Array<SousCategorie>>(this.url2+'/'+id).subscribe(data =>{
      this.sousCategories=data;
    });

  }


}



/*
export class SousCategorieService {

  private _sousCategorie: SousCategorie=new SousCategorie();
  private _sousCategories: Array <SousCategorie>=new Array<SousCategorie>();
  private _urlSousCategorie: 'http://localhost:8090/api/souscategorie/';


  constructor(private http: HttpClient) { }

  private cloneSousCategorie(sousCategorie: SousCategorie) {
    const myClone = new SousCategorie();
    myClone.id = sousCategorie.id;
    myClone.libelle = sousCategorie.libelle;

    return myClone;
  }

  public findAllsc(){
    console.log('dkhel finall');
    this.http.get<Array<SousCategorie>>('http://localhost:8090/api/souscategorie/').subscribe(
      data => {
        console.log('ha sc' + data);
        this.sousCategories = data;
      }

    );
  }


  get sousCategories(): Array<SousCategorie> {
    return this._sousCategories;
  }

  set sousCategories(value: Array<SousCategorie>) {
    this._sousCategories = value;
  }


  get sousCategorie(): SousCategorie {
    return this._sousCategorie;
  }

  set sousCategorie(value: SousCategorie) {
    this._sousCategorie = value;
  }

}
*/
