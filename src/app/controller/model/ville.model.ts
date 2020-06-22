import {Offre} from "./offre.model";
import { Quartier } from './quartier.model';
import { Demande } from './demande.model';

export class Ville {
    id:number;
    nom: String;
    Quartier: Quartier[];
    offre: Offre[];
    demande: Demande[];
}
