import { Injectable } from '@angular/core';
import {Cours} from "../model/cours.model";
import {HttpClient} from "@angular/common/http";
import {SousCategorie} from "../model/sousCategorie.model";
import {Question} from "../model/question.model";
import {Reponse} from "../model/reponse.model";
import {Categorie} from "../model/categorie.model";


@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  private _reponse: Reponse;
  private _cours: Cours;

  constructor(private http: HttpClient) { }


  save(cours,reponsee){
    let array :string[]=[cours,reponsee];
    console.log(array+"arraaaaaaaaaaaaay");
    this.http.post('http://localhost:8090/api/reponse/',array).subscribe(
      data => {
        if(data>0) {

          console.log(this.reponse+"aaaaaaaaaaaaaaa");
          this.reponse = null;
        }
      }, error => {
        console.log('error');
      }
    );
  }






  get cours(): Cours {
    if (this._cours == null){
      this._cours = new Cours();
    }
    return this._cours;
  }
  set cours(value: Cours) {
    this._cours = value;
  }


  get reponse(): Reponse {
    return this._reponse;
  }

  set reponse(value: Reponse) {
    this._reponse = value;
  }
}
