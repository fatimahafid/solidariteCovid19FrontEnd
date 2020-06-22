import {Ville} from "./ville.model";
import {User} from "./user.model";
import {TypeService} from "./type-service.model";
import {Quartier} from "./quartier.model";

export class Demande {
  id: number;
  dateDemande: Date = new Date();
  description: String = new String();
  isAccepted: boolean = false;
  accepted: boolean = false;
  etat:String = new String();
  dateAcceptation:Date = new Date();
  user: User = new User();
  participant :User = new User();
  typeService: TypeService = new TypeService();
  ville:Ville = new Ville();
  quartier: Quartier = new Quartier();
}
