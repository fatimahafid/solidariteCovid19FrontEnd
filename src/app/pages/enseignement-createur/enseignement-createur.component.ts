import {Component, Inject, OnInit} from '@angular/core';
import {Cours} from "../../controller/model/cours.model";
import {CoursService} from "../../controller/service/cours.service";
import {Categorie} from "../../controller/model/categorie.model";
import {SousCategorie} from "../../controller/model/sousCategorie.model";
import {CategorieService} from "../../controller/service/categorie.service";
import {SousCategorieService} from "../../controller/service/sousCategorie.service";
import {Question} from "../../controller/model/question.model";
import {Reponse} from "../../controller/model/reponse.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {StatutForumService} from "../../controller/service/statutForum.service";
import {StatutForum} from "../../controller/model/statutForum.model";
import {User} from "../../controller/model/user.model";
import {ReponseService} from "../../controller/service/reponse.service";

@Component({
  selector: 'app-enseignement-createur',
  templateUrl: './enseignement-createur.component.html',
  styleUrls: ['./enseignement-createur.component.css']
})
export class EnseignementCreateurComponent implements OnInit {

  constructor(public reponseService: ReponseService,public coursService: CoursService, public categorieService: CategorieService, public sousCategorieService: SousCategorieService) {
  }

  user: any = {};
  titre: String;
  description: String;
  attachement: String;
  isAccepted: Boolean;


  private _categorie: Categorie;
  private _sousCategorie: SousCategorie;

  ngOnInit(): void {
    this.findAll();

    this.getAllCategories();
//    this.findAllc();
    // this.findAllsc();
  }

  get cours(): Cours {
    return this.coursService.cours;
  }


  public validateSave() {
    return this.coursService.validateSave();

  }

  public get sousCategories(): Array<SousCategorie> {
    return this.sousCategorieService.sousCategories;

  }

  public get categories(): Array<Categorie> {
    return this.categorieService.categories;

  }

  get categorie(): Categorie {
    return this.categorieService.categorie;

  }

  get sousCategorie(): SousCategorie {
    return this.sousCategorieService.sousCategorie;
  }

  public getAllCategories() {
    return this.categorieService.getAllCategories();
  }

  public getAllSousCategories() {
    return this.sousCategorieService.getAllSousCategories();
  }

  public filterSubById(event) {
    let newVal: string;
    newVal = event.target.value;
    let toArray = newVal.split(":");
    this.selectedcategorie=toArray[1];
    console.log("hahia li msectia"+this.selectedcategorie);
    console.log("hahia li dik toarray 1"+toArray[1]);
  }

  public detectFiles(event) {
    let newVal: string;
    newVal = event.target.value;
    let toArray = newVal.split(":");
    this.fileName=toArray[4];
    console.log("hahia li dik toarray 4 "+toArray[4]);
    this.selectedFiles = event.target.files;
    this.fileName = "../../../assets/accueil-Enseignement/"+this.selectedFiles[0].name;
    console.log('selectedFiles: ' + this.fileName );
  }

  public findAll() {
    this.coursService.findAll();
  }



  get question(): Question {
    return this.coursService.question;
  }

  get reponse(): Reponse {
    return this.coursService.reponse;
  }

  /* public findSousCatByCatReference(categorie: Categorie){
     this.categorieService.findSousCatByCatReference(categorie);
   }*/
  public findByCategorie(id) {
    console.log("ha cat" + id)
    this.coursService.findByCategorie(id);
  }

  public findQuestionByCoursId(cours: Cours) {
    this.coursService.findQuestionByCoursId(cours);
  }

  public findReponseByCoursId(cours: Cours) {
    this.coursService.findReponseByCoursId(cours);
  }

  public addReponse() {
    return this.coursService.addReponse();
  }

  private _selectedcategorie:String ;
  private _selecteduser: String;
  private _fileName: String;
  private _selectedFiles: FileList;


  get selectedFiles(): FileList {
    return this._selectedFiles;
  }

  set selectedFiles(value: FileList) {
    this._selectedFiles = value;
  }

  get fileName(): String {
    return this._fileName;
  }

  set fileName(value: String) {
    this._fileName = value;
  }

  save() {
    this.coursService.save( this.selectedcategorie,this.fileName );
    this.ngOnInit();
    console.log(this.cours + "aaaaaaaaaaaaaaa");

  }
  getselectedcategorie(event)
  {
    let newVal :string;
    newVal= event.target.value;
    let toArray =  newVal.split(":");
    this.selectedcategorie=toArray[0];
    console.log(this.selectedcategorie);
  }


  get selectedcategorie(): String {
    return this._selectedcategorie;
  }

  set selectedcategorie(value: String) {
    this._selectedcategorie = value;
  }
  private _selectedcours:String ;
  private _selectedreponse:String ;

  get selectedcours(): String {
    return this._selectedcours;
  }

  set selectedcours(value: String) {
    this._selectedcours = value;
  }

  get selectedreponse(): String {
    return this._selectedreponse;
  }

  set selectedreponse(value: String) {
    this._selectedreponse = value;
  }

  public filterSubByIdd(cours : Cours) {
    // let newVal: string = event.target.value;
    // let toArray = newVal.split(":");
    let newVal: string = ""+cours.id;
    this.selectedcours=newVal;
    console.log("hahia li msectia"+this.selectedcours);
    console.log("hahia li dik toarray 1"+newVal);
  }
  savee() {
    this.selectedreponse=this.reponse.reponse;
    this.reponseService.save( this.selectedcours,this.selectedreponse );
    this.ngOnInit();
    console.log(this.reponse.reponse + "bbbbbb");
    console.log(this.cours + "aaaaaaaaaaaaaaa");
  }


}
