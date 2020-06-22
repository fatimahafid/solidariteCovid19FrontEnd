import {User} from "./user.model";
import {Offre} from "./offre.model";
export class OffreAccepte {
  id: number;
  user: User;
  offres: Offre;
  offre: Offre[];
}
