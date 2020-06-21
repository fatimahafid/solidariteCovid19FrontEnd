import { Injectable } from '@angular/core';
import {Cours} from "../model/cours.model";
import {HttpClient} from "@angular/common/http";
import {SousCategorie} from "../model/sousCategorie.model";
import {Question} from "../model/question.model";
import {Reponse} from "../model/reponse.model";
import {Categorie} from "../model/categorie.model";
import {StatutForum} from "../model/statutForum.model";
import {CommentaireForum} from "../model/commentaireForum.model";


@Injectable({
  providedIn: 'root'
})
export class CommentaireForumService {

  private _commentaireForum: CommentaireForum;
  private _statutForum: StatutForum;

  constructor(private http: HttpClient) { }


  save(statutForumm,commentaireForumm){
    let array :string[]=[statutForumm,commentaireForumm];
    console.log(array+"arraaaaaaaaaaaaay");
    this.http.post('http://localhost:8090/api/commentaireforum/',array).subscribe(
      data => {
        if(data>0) {
          console.log(this.commentaireForum+"aaaaaaaaaaaaaaa");
          this.statutForum = null;
        }
      }, error => {
        console.log('error');
      }
    );
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

  get statutForum(): StatutForum {
    return this._statutForum;
  }

  set statutForum(value: StatutForum) {
    this._statutForum = value;
  }
}
