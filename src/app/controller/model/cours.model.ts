import {User} from "./user.model";
import {Categorie} from "./categorie.model";
import {Question} from "./question.model";
import {Reponse} from "./reponse.model";
import {SousCategorie} from "./sousCategorie.model";
export class Cours {
  public id : number;
  public titre : string;
  public description : string;
  public attachement : string;
  public isAccepted : boolean;
  public user : User;
  public categorie : Categorie;
  public sousCategorie: SousCategorie;
  public questions = new Array<Question>();
  public reponses = new Array<Reponse>();


}
