import { Injectable } from '@angular/core';
import {Cours} from "../model/cours.model";
import {HttpClient} from "@angular/common/http";
import {SousCategorie} from "../model/sousCategorie.model";
import {Question} from "../model/question.model";
import {Reponse} from "../model/reponse.model";
import {StatutForum} from "../model/statutForum.model";
import {CommentaireForum} from "../model/commentaireForum.model";


@Injectable({
  providedIn: 'root'
})
export class StatutForumService {

  private _statutForum: StatutForum;
  public _statutForums: Array <StatutForum>;
  public _sousCategories: Array <SousCategorie>=new Array<SousCategorie>();
  private _commentaireForum: CommentaireForum;



  private _url: 'http://localhost:8090/api/statutforum/';
  private _urlQuestion: 'http://localhost:8090/api/commentaireforum/';


  constructor(private http: HttpClient) { }

  private cloneStatutForum(statutForum: StatutForum) {
    const myClone = new StatutForum();
    myClone.id = statutForum.id;
    myClone.question = statutForum.question;
    myClone.user = statutForum.user;
    myClone.categorie = statutForum.categorie;
    return myClone;
  }

  private cloneCommentaireForum(commentaireForum: CommentaireForum) {
    const myClone = new CommentaireForum();
    myClone.id = commentaireForum.id;
    myClone.libelle = commentaireForum.libelle;
    return myClone;
  }

  public findCommentaireForumByCoursId(statutForum: StatutForum){
     this.http.get<Array<CommentaireForum>>('http://localhost:8090/api/commentaireforum/statutForum/id/' + statutForum.id).subscribe(
       data => {
         this.statutForum.commentaireForums = data;
       }
     );
   }

  public addCommentaireForum(){
     console.log('id: ' + this.commentaireForum.id);
     console.log('question: ' + this.commentaireForum.libelle);
     this.statutForum.commentaireForums.push(this.cloneCommentaireForum(this.commentaireForum));
     this.commentaireForum = null;

   }


  public save(){

    this.http.post('http://localhost:8090/api/statutforum/', this.statutForum).subscribe(
      data => {
        if(data>0) {
          this.statutForums.push(this.cloneStatutForum(this.statutForum));

          this.statutForum = null;
          this.commentaireForum = null;

          console.log(this.statutForum.commentaireForums);
          console.log("mzianaa");
}
      }, error => {
        console.log('error');
      }
    );

  }

  public findAll(){
    console.log('dkhel finall');
    this.http.get<Array<StatutForum>>('http://localhost:8090/api/statutforum/').subscribe(
      data => {
        console.log('ha data' + data);
        this.statutForums = data;
        console.log('ha les statutForum' +this.statutForums);
      }

    );
  }


  public getSousCategoriee(data){

    return  this.http.get('http://localhost:8090/api/souscategorie/',data);
  }



  get statutForum(): StatutForum {
    if (this._statutForum == null){
      this._statutForum = new StatutForum();
    }
    return this._statutForum;
  }
  set statutForum(value: StatutForum) {
    this._statutForum = value;
  }

  get commentaireForum(): CommentaireForum {
    if (this._commentaireForum == null){
      this._commentaireForum = new CommentaireForum();
    }
    return this._commentaireForum;
  }

  set commentaireForum(value: CommentaireForum) {
    this._commentaireForum = value;
  }

  get statutForums(): Array<StatutForum> {
    if (this._statutForums == null){
      this._statutForums = new Array <StatutForum>();
    }
    return this._statutForums;
  }

  set statutForums(value: Array<StatutForum>) {
    this._statutForums = value;
  }







}
