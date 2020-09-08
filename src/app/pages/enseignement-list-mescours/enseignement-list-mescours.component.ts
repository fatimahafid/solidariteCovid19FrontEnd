import { Component, OnInit } from '@angular/core';
import {Categorie} from "../../controller/model/categorie.model";
import {SousCategorie} from "../../controller/model/sousCategorie.model";
import {Cours} from "../../controller/model/cours.model";
import {Question} from "../../controller/model/question.model";
import {Reponse} from "../../controller/model/reponse.model";
import {CoursService} from "../../controller/service/cours.service";
import {CategorieService} from "../../controller/service/categorie.service";
import {SousCategorieService} from "../../controller/service/sousCategorie.service";
import {ReponseService} from "../../controller/service/reponse.service";


@Component({
  selector: 'app-enseignement-list-mescours',
  templateUrl: './enseignement-list-mescours.component.html',
  styleUrls: ['./enseignement-list-mescours.component.css']
})
export class EnseignementListMescoursComponent implements OnInit {

  // @ts-ignore
  constructor(public coursService : CoursService,public categorieService : CategorieService,public sousCategorieService : SousCategorieService,public reponseService : ReponseService) { }

  user: any={};
  titre : String;
  description : String;
  attachement : String;
  isAccepted : Boolean;

  private _categorie: Categorie;
  private _sousCategorie : SousCategorie;
  private _fileName: String;
  private _selectedFiles: FileList;
  private _selectedcategorie:String ;

  ngOnInit(): void {
    this.findAll();

    this.getAllCategories();
//    this.findAllc();
    // this.findAllsc();
  }

  get cours(): Cours {
    return this.coursService.cours;
  }


  public validateSave(){
    return this.coursService.validateSave();

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

  /*public findSousCategorieByCategorieId(categorie: Categorie){
    this.categorieService.findSousCategorieByCategorieId(categorie);
  }
  public findAllc(){
    this.categorieService.findAllc();
  }
*/
  public findAll(){
    this.coursService.findAll();
  }


  /* public findAllsc(){

     this.sousCategorieService.findAllsc();
   }*/
  getSousCategorie(event){
    console.log(event.target.value);
    var obj ={
      categorie : event.target.value,
    }
    this.coursService.getSousCategoriee(obj).subscribe(res=>{
      console.log(res);
    });

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
    console.log("ha cat"+id)
    this.coursService.findByCategorie(id);
  }
  public findQuestionByCoursId(cours: Cours){
    this.coursService.findQuestionByCoursId(cours);
  }
  public findReponseByCoursId(cours: Cours){
    this.coursService.findReponseByCoursId(cours);
  }
  public addReponse(){
    return this.coursService.addReponse();
  }
  public deleteByCoursId(cours: Cours){
    this.coursService.deleteByCoursId(cours);
    this.ngOnInit();
  }

  /*public save(){
    return this.coursService.save();
  }*/
  private _selectedcours:String ;
  private _selectedreponse:String ;

  get selectedcours(): String {
    return this._selectedcours;
  }
  get fileName(): String {
    return this._fileName;
  }

  set fileName(value: String) {
    this._fileName = value;
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
  get selectedFiles(): FileList {
    return this._selectedFiles;
  }
  get selectedcategorie(): String {
    return this._selectedcategorie;
  }

  set selectedcategorie(value: String) {
    this._selectedcategorie = value;
  }
  save() {
    this.coursService.save( this.selectedcategorie,this.fileName );
    this.ngOnInit();
    console.log(this.cours + "aaaaaaaaaaaaaaa");

  }
  set selectedFiles(value: FileList) {
    this._selectedFiles = value;
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
   refreshPage(){
    window.location.reload();
  }
}


