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
export class QuestionService {

  private _question: Question;
  private _cours: Cours;

  constructor(private http: HttpClient) { }


  save(cours,questionn){
    let array :string[]=[cours,questionn];
    console.log(array+"arraaaaaaaaaaaaay");
    this.http.post('http://localhost:8090/api/question/',array).subscribe(
      data => {
        if(data>0) {
          console.log(this.question+"aaaaaaaaaaaaaaa");
          this.question = null;
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

  get question(): Question {
    if (this._question == null){
      this._question = new Question();
    }
    return this._question;
  }

  set question(value: Question) {
    this._question = value;
  }










}
