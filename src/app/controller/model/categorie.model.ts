import {SousCategorie} from "./sousCategorie.model";
import {Question} from "./question.model";
import {Cours} from "./cours.model";

export class Categorie {
  public id : number;
  public libelle : string;
  public sousCategories = new Array<SousCategorie>();
  public courss = new Array<Cours>();



}
