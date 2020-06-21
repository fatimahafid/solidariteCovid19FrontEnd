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
export class CoursService {

  private _cours: Cours;
  private _categorie: Categorie;
  public _courss: Array <Cours>;
  public _sousCategories: Array <SousCategorie>=new Array<SousCategorie>();
  private _question: Question;
  private _reponse: Reponse;
  private _url: 'http://localhost:8090/api/cours/';
  private _urlQuestion: 'http://localhost:8090/api/question/';

  constructor(private http: HttpClient) { }

  private cloneCours(cours: Cours) {
    const myClone = new Cours();
    myClone.id = cours.id;
    myClone.attachement = cours.attachement;
    myClone.description = cours.description;
    myClone.isAccepted = cours.isAccepted;
    myClone.titre = cours.titre;
    myClone.user = cours.user;
    myClone.categorie = cours.categorie;
    return myClone;
  }

  private cloneQuestion(question: Question) {
    const myClone = new Question();
    myClone.id = question.id;
    myClone.question = question.question;
    return myClone;
  }
  private cloneReponse(reponse: Reponse) {
    const myClone = new Reponse();
    myClone.id = reponse.id;
    myClone.reponse = reponse.reponse;
    return myClone;
  }

  public findQuestionByCoursId(cours: Cours){
    this.http.get<Array<Question>>('http://localhost:8090/api/question/cours/id/' + cours.id).subscribe(
      data => {
        this.cours.questions = data;
      }
    );
  }

  public deleteByCoursId(cours: Cours){
    this.http.delete('http://localhost:8090/api/cours/id/' + cours.id).subscribe(
      data => {

        console.log("supp avec succé");
      }
    );
  }

  public addQuestion(){
    console.log('id: ' + this.question.id);
    console.log('question: ' + this.question.question);
    this.cours.questions.push(this.cloneQuestion(this.question));
    this.question = null;

  }
  public addReponse(){
    console.log('id: ' + this.reponse.id);
    console.log('reponse: ' + this.reponse.reponse);
    this.cours.reponses.push(this.cloneReponse(this.reponse));
    this.reponse = null;

  }

  /*public save(){

    this.http.post('http://localhost:8090/api/cours/', this.cours).subscribe(
      data => {
        if(data>0) {
          this.courss.push(this.cloneCours(this.cours));

          this.cours = null;
          this.question = null;
          this.reponse = null;
          console.log(this.cours.reponses);
          console.log("mzianaa");
}
      }, error => {
        console.log('error');
      }
    );

  }*/
  save(categorie,fileName){
    let array :string[]=[categorie,,this.cours.titre,this.cours.description,fileName,"1"];
    console.log(array+"arraaaaaaaaaaaaay");
    this.http.post('http://localhost:8090/api/cours/',array).subscribe(
      data => {
        if(data>0) {
          console.log(this.cours+"aaaaaaaaaaaaaaa");
          this.cours = null;
        }
      }, error => {
        console.log('error');
      }
    );
  }
  public findReponseByCoursId(cours: Cours){
    this.http.get<Array<Reponse>>('http://localhost:8090/api/reponse/cours/id/' + cours.id).subscribe(
      data => {
        this.cours.reponses = data;
      }
    );
  }
  public findAll(){
    console.log('dkhel finall');
    this.http.get<Array<Cours>>('http://localhost:8090/api/cours/').subscribe(
      data => {
        console.log('ha data' + data);
        this.courss = data;
        console.log('ha les cours' +this.courss);
      }

    );
  }
  public validateSave(): boolean{
    return this.cours.titre != null ;

  }

  public getSousCategoriee(data){

   return  this.http.get('http://localhost:8090/api/souscategorie/',data);
  }

  public findByCategorie(id: number):
    Array < Cours > {
      this.http.get<Cours[]>('http://localhost:8090/api/cours/categorie/id/' + id).subscribe(
        data => {
          //   this.categorie.courss = data;
          this.courss = data;
          console.log("list up"+data)

        });
    return this.courss;
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
  get categorie(): Categorie {
    if (this._categorie == null){
      this._categorie = new Categorie();
    }
    return this._categorie;
  }
  set categorie(value: Categorie) {
    this._categorie = value;
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
  get reponse(): Reponse {
    if (this._reponse == null){
      this._reponse = new Reponse();
    }
    return this._reponse;
  }

  set reponse(value: Reponse) {
    this._reponse = value;
  }

  get courss(): Array<Cours> {
    if (this._courss == null){
      this._courss = new Array <Cours>();
    }
    return this._courss;
  }

  set courss(value: Array<Cours>) {
    this._courss = value;
  }







}
