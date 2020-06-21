import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {StatutIsolement} from '../model/statut-isolement.model';

@Injectable({
  providedIn: 'root'
})
export class StatutIsolementService {
  private _statut: StatutIsolement;
  private baseUrl = 'http://localhost:8090/api/statuts/';
  private baseUrl1 = 'http://localhost:8090/api/statuts/5/';
  private baseUrl2 = 'http://localhost:8090/api/users/6/';
  private baseUrl3 = 'http://localhost:8090/api/statuts/7/';
  constructor(private http: HttpClient, private datePipe: DatePipe) { }


  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }

  transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  get statutIsolement(): StatutIsolement {
    if (this._statut == null){ // asurer l'instanciation
      this._statut = new StatutIsolement();
    }
    return this._statut;
  }
  set statutIsolement(value: StatutIsolement) {
    this._statut = value;
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getByType(type: number): Observable<StatutIsolement[]> {
    return this.http.get<StatutIsolement[]>(`${this.baseUrl1}/${type}`);
  }
  getByDestinctUsers(type: number, user: number): Observable<StatutIsolement[]> {
    return this.http.get<StatutIsolement[]>(`${this.baseUrl2}/${type}/${user}`);
  }
  countByUserId(user: number): Observable<number>{
    return this.http.get<number>(`${this.baseUrl3}/${user}`);
  }
}
