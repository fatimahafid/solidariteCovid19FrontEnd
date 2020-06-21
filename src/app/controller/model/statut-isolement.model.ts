import {User} from './user.model';
import {TypeStatut} from './type-statut.model';

export class StatutIsolement {
  public  id: number;
  public  dateStatut: string;
  public  contenu: string;
  public  isAccepted: boolean;
  public user: User;
  public typeStatut: TypeStatut;
}
