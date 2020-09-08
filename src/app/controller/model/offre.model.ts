import {User} from './user.model';
import {TypeService} from './type-service.model';
import {Ville} from "./ville.model";
import {OffreAccepte} from "./offre-accepte.model";
import {Quartier} from "./quartier.model";

export class Offre {
  id: number;
  dateOffre: Date =new Date();
  desction: String =new String();
  isAccepted: boolean = false;
  max_accepte: number = 0;
  nbrAccepte: number = 0;
  ville: Ville = new Ville() ;
  quartier: Quartier =new Quartier() ;
  user: User = new User();
  typeService: TypeService= new TypeService() ;
  offreAcceptes: OffreAccepte[];
  constructor() {
  }


}
