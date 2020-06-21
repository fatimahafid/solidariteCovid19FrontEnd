import {User} from "./user.model";
import {Categorie} from "./categorie.model";

import {CommentaireForum} from "./commentaireForum.model";
import {SousCategorie} from "./sousCategorie.model";
export class StatutForum {
  public id : number;
  public question : string;
  public user : User;
  public categorie : Categorie;
  public sousCategorie: SousCategorie;
  public commentaireForums = new Array<CommentaireForum>();



}
