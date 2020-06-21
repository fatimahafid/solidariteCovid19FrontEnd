import { Injectable } from '@angular/core';
import {Categorie} from "../model/categorie.model";
import {HttpClient} from "@angular/common/http";
import {SousCategorie} from "../model/sousCategorie.model";
import {Cours} from "../model/cours.model";
import {Reponse} from "../model/reponse.model";
import {Question} from "../model/question.model";


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private _categorie : Categorie;
  private _categories : Array<Categorie>;
  private _c :Categorie;
  private _cours: Cours;


  get c(): Categorie {
    return this._c;
  }

  set c(value: Categorie) {
    this._c = value;
  }

  get categories(): Array<Categorie> {
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }

  get categorie():Categorie {
    return this._categorie;
  }
  set categorie(value) {
    this._categorie = value;
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

  private url1 = 'http://localhost:8090/api/categorie/';
  private url2 = 'http://localhost:8090/api/categorie/id';
  private url3 = 'http://localhost:8090/api/categorie/categorie/libelle';


  constructor(private http:HttpClient) {
  }


  getAllCategories() {
    this.http.get<Array<Categorie>>(this.url1).subscribe(data => {
      this.categories = data;
      console.log("data :" + data);

    });
  }

  getCategorieBylibelle(libelle :string) : Categorie{
    this.http.get<Categorie>(`${this.url3}/${libelle}`) .subscribe(response => this.c = response);
    console.log("get categ by libelle "+libelle +"--->" +this.c);
    return this.c;
  }


}




