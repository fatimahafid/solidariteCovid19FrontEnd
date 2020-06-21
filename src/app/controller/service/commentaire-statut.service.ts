import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {StatutIsolement} from '../model/statut-isolement.model';
import {CommentaireStatut} from '../model/commentaire-statut.model';

@Injectable({
  providedIn: 'root'
})
export class CommentaireStatutService {
  private baseUrl = 'http://localhost:8090/api/commentaires/';
  private baseUrl1 = 'http://localhost:8090/api/commentaires/5/';

  constructor(private http: HttpClient,private comment: CommentaireStatut) { }

  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
  getByStatut(type: number): Observable<CommentaireStatut[]> {
    return this.http.get<CommentaireStatut[]>(`${this.baseUrl1}/${type}`);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  get CommentaireStatut(): CommentaireStatut {
    if (this.comment == null){ // asurer l'instanciation
      this.comment = new CommentaireStatut();
    }
    return this.comment;
  }
  set CommentaireStatut(value: CommentaireStatut) {
    this.comment = value;
  }
}
