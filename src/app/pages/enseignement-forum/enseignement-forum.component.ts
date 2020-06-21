import { Component, OnInit } from '@angular/core';
import {StatutForumService} from "../../controller/service/statutForum.service";
import {Categorie} from "../../controller/model/categorie.model";
import {SousCategorie} from "../../controller/model/sousCategorie.model";
import {StatutForum} from "../../controller/model/statutForum.model";
import {Cours} from "../../controller/model/cours.model";
import {Question} from "../../controller/model/question.model";
import {CategorieService} from "../../controller/service/categorie.service";
import {SousCategorieService} from "../../controller/service/sousCategorie.service";
import {Reponse} from "../../controller/model/reponse.model";
import {CommentaireForum} from "../../controller/model/commentaireForum.model";
import {CommentaireForumService} from "../../controller/service/commentaireForum.service";

@Component({
  selector: 'app-enseignement-forum',
  templateUrl: './enseignement-forum.component.html',
  styleUrls: ['./enseignement-forum.component.css']
})
export class EnseignementForumComponent implements OnInit {

  constructor(public commentaireForumService:CommentaireForumService,public statutForumService:StatutForumService,public categorieService: CategorieService, public sousCategorieService: SousCategorieService) { }
  user: any={};
  private _categorie: Categorie;
  private _sousCategorie : SousCategorie;

  ngOnInit(): void {
    this.findAllsf();
    this.getAllCategories();
  }

  public  get sousCategories() : Array<SousCategorie> {
    return this.sousCategorieService.sousCategories;

  }
  public  get categories() : Array<Categorie> {
    return this.categorieService.categories;

  }
  get categorie(): Categorie {
    return this.categorieService.categorie;

  }
  get sousCategorie(): SousCategorie {
    return this.sousCategorieService.sousCategorie;
  }

  public getAllCategories(){
    return this.categorieService.getAllCategories();
  }

  public  getAllSousCategories(){
    return this.sousCategorieService.getAllSousCategories();
  }
  public filterSubById(event) {

    let newVal :string;
    newVal= event.target.value;

    let toArray =  newVal.split(":");
    this.sousCategorieService.updateSousCategories(toArray[1]);
  }

  get statutForum(): StatutForum {
    return this.statutForumService.statutForum;
  }

  public findAllsf(){
    this.statutForumService.findAll();
  }
  public findCommentaireForumByStatutForumId(statutForum: StatutForum){
    this.statutForumService.findCommentaireForumByCoursId(statutForum);
  }
  public addCommentaireForum(){
    return this.statutForumService.addCommentaireForum();
  }
  public savesf(){
    return this.statutForumService.save();
    this.ngOnInit();
  }
  private _selectedstatutforum:String ;
  private _selectedcommentaireforum:String ;


  get selectedstatutforum(): String {
    return this._selectedstatutforum;
  }

  set selectedstatutforum(value: String) {
    this._selectedstatutforum = value;
  }

  get selectedcommentaireforum(): String {
    return this._selectedcommentaireforum;
  }

  set selectedcommentaireforum(value: String) {
    this._selectedcommentaireforum = value;
  }
  get commentaireForum(): CommentaireForum {
    return this.commentaireForumService.commentaireForum;
  }
  public filterSubByIdd(statutForum : StatutForum) {
    // let newVal: string = event.target.value;
    // let toArray = newVal.split(":");
    let newVal: string = ""+statutForum.id;
    this.selectedstatutforum=newVal;
    console.log("hahia li msectia"+this.selectedstatutforum);
    console.log("hahia li dik toarray 1"+newVal);
  }
  savee() {
    this.selectedcommentaireforum=this.commentaireForum.libelle;
    this.commentaireForumService.save( this.selectedstatutforum,this.selectedcommentaireforum );
    this.ngOnInit();
    console.log(this.commentaireForum.libelle + "bbbbbb");
    console.log(this.statutForum + "aaaaaaaaaaaaaaa");
  }

}
