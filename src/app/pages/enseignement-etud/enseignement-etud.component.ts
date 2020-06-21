import { Component, OnInit } from '@angular/core';
import {CoursService} from "../../controller/service/cours.service";
import {CategorieService} from "../../controller/service/categorie.service";
import {SousCategorieService} from "../../controller/service/sousCategorie.service";
import {Categorie} from "../../controller/model/categorie.model";
import {SousCategorie} from "../../controller/model/sousCategorie.model";
import {Cours} from "../../controller/model/cours.model";
import {Question} from "../../controller/model/question.model";
import {Reponse} from "../../controller/model/reponse.model";
import {QuestionService} from "../../controller/service/question.service";

@Component({
  selector: 'app-enseignement-etud',
  templateUrl: './enseignement-etud.component.html',
  styleUrls: ['./enseignement-etud.component.css']
})
export class EnseignementEtudComponent implements OnInit {
  constructor(public questionService: QuestionService,public coursService: CoursService, public categorieService: CategorieService, public sousCategorieService: SousCategorieService) {
  }
  user: any={};
  titre : String;
  description : String;
  attachement : String;
  isAccepted : Boolean;

  private _categorie: Categorie;
  private _sousCategorie : SousCategorie;

  ngOnInit(): void {
    this.findAll();
  //  this.findAllc();
    this.getAllCategories();


  }
  get cours(): Cours {
    return this.coursService.cours;
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
  public findByCategorie(id) {
    console.log("ha cat"+id)
    this.coursService.findByCategorie(id);
  }
  public  getAllSousCategories(){
    return this.sousCategorieService.getAllSousCategories();
  }
  /* public filterSubById(event) {

     let newVal :string;
     newVal= event.target.value;

     let toArray =  newVal.split(":");
     this.sousCategorieService.updateSousCategories(toArray[1]);
   }

    public findAllc() {
      this.categorieService.findAllc();
    }*/

  public findAll() {
    this.coursService.findAll();
  }

  public findQuestionByCoursId(cours: Cours){
    this.coursService.findQuestionByCoursId(cours);
  }
  public findReponseByCoursId(cours: Cours){
    this.coursService.findReponseByCoursId(cours);
  }
 /* public findByCategorie(categorie: Categorie){
     this.categorieService.findByCategorie(categorie);
  }
 }*/



  /*
   public findByCategorie(categorie:Categorie){
     return this.coursService.findByCategorie(categorie);
   }*/

  public addQuestion(){
    return this.coursService.addQuestion();
  }


  get question(): Question {
    return this.coursService.question;
  }
  get reponse(): Reponse {
    return this.coursService.reponse;
  }

  get selectedcours(): String {
    return this._selectedcours;
  }

  set selectedcours(value: String) {
    this._selectedcours = value;
  }


  private _selectedcours:String ;
  private _selectedquestion:String ;


  get selectedquestion(): String {
    return this._selectedquestion;
  }

  set selectedquestion(value: String) {
    this._selectedquestion = value;
  }

  public filterSubById(event) {
    let newVal: string;
    newVal = event.target.value;
    let toArray = newVal.split(":");
    this.selectedcours=toArray[1];

    console.log("hahia li msectia"+this.selectedcours);
    console.log("hahia li dik toarray 1"+toArray[1]);
  }
  public filterSubByIdd(cours : Cours) {
   // let newVal: string = event.target.value;
   // let toArray = newVal.split(":");
    let newVal: string = ""+cours.id;
    this.selectedcours=newVal;
    console.log("hahia li msectia"+this.selectedcours);
    console.log("hahia li dik toarray 1"+newVal);
  }
  save() {
    this.selectedquestion=this.question.question;
    this.questionService.save( this.selectedcours,this.selectedquestion );
    this.ngOnInit();
    console.log(this.question.question + "bbbbbb");
    console.log(this.cours + "aaaaaaaaaaaaaaa");

  }

  getselectedcours(cours : Cours)
  { this.findQuestionByCoursId(cours);
    let newVal :string;
    newVal= ""+ this.findQuestionByCoursId(cours);
    let toArray =  newVal.split(":");
    this.selectedcours=toArray[0];
    console.log("hahia li msectia"+this.selectedcours);
    console.log("hahia li dik toarray 1"+toArray[1]);
    console.log("3iw   "+this.findQuestionByCoursId(cours));
  }
}
