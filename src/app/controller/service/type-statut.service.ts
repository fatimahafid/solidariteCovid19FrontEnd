import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TypeStatut} from "../model/type-statut.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TypeStatutService {
  private baseUrl = 'http://localhost:8090/api/typeStatuts/';
  constructor(private http: HttpClient, private typeStatut: TypeStatut) { }
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getData1(id: number): Observable<TypeStatut> {
    return this.http.get<TypeStatut>(`${this.baseUrl}/${id}`);
  }
  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
  get TypeStatut(): TypeStatut {
    if (this.typeStatut == null){ // asurer l'instanciation
      this.typeStatut = new TypeStatut();
    }
    return this.typeStatut;
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
