import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../model/offre.model";
import {User} from "../model/user.model";
import {TypeService} from '../model/type-service.model';
import {Ville} from "../model/ville.model";
import {Quartier} from "../model/quartier.model";
import {OffreAccepte} from "../model/offre-accepte.model";
import {UserService} from "./user.service";
@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private _offre : Offre;
  private _offres : Array<Offre>;
  private _user : User;
  private _ville :Ville;
  private _typeservice :TypeService;
  private _quartier :Quartier;
  private _participations : Array<OffreAccepte>;

  get offres(): Array<Offre> {
    if(this._offres==null)
    this._offres=new Array();
    return this._offres;
  }

  set offres(value: Array<Offre>) {
    this._offres = value;
  }

  get offre(): Offre {
    if(this._offre==null)
      this._offre=new Offre();
    return this._offre;
  }

  set offre(value: Offre) {
    this._offre = value;
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }


  get ville():Ville {
    return this._ville;
  }
  set ville(value) {
    this._ville = value;
  }

  get typeservice():TypeService {
    return this._typeservice;
  }
  set typeservice(value) {
    this._typeservice = value;
  }


  get quartier(): Quartier {
    return this._quartier;
  }

  set quartier(value: Quartier) {
    this._quartier = value;
  }

  get participations(): Array<OffreAccepte> {
    if(this._participations==null)
      this._participations=new Array();
    return this._participations;
  }


  set participations(value: Array<OffreAccepte>) {
    this._participations = value;
  }

  private Url1 = 'http://localhost:8090/offre';
  private url2 = 'http://localhost:8090/covid19-api/offre/';
  private url3 = 'http://localhost:8090/covid19-api/offreAccepte/id';
  private url4 = 'http://localhost:8090/covid19-api/offre/';

  private url5 = 'http://localhost:8090/covid19-api/offre/id';
  private url6 = 'http://localhost:8090/covid19-api/offre/libelle';
  private url7 = 'http://localhost:8090/covid19-api/offre/nom';


  constructor(private http:HttpClient,private userservice: UserService) {
 }
 getOffre(id: number): Observable<object> {
   return this.http.get(`${this.Url1}/${id}`);
 }

  getAlloffres() {
      this.http.get<Array<Offre>>(this.url2).subscribe(data =>{
      this.offres=data;
    });

  }
  getparticipant(id: number): Array<OffreAccepte> {
    this.http.get<OffreAccepte[]>(this.url3+'/'+id).subscribe(data =>{
       this.participations=data  ;
    console.log(data)});
    return  this.participations;
  }

  getoffrebyville(id: number): Array<Offre> {
    console.log("findbyville");
      this.http.get<Offre[]>(this.url5+'/'+id).subscribe(data =>{
      this.offres=data  ;
      console.log(data)});
    return  this.offres;
  }
  getoffrebyquartier(nom: string): Array<Offre> {
    console.log("findbyquartier");

    this.http.get<Offre[]>(this.url7+'/'+nom).subscribe(data =>{
      this.offres=data  ;
      console.log(data)});
    return  this.offres;
  }
  getoffrebytypeservice(libelle: string): Array<Offre> {
    console.log("findbytypeservice");

    this.http.get<Offre[]>(this.url6+'/'+libelle).subscribe(data =>{
      this.offres=data  ;
      console.log(data)});
    return  this.offres;
  }


 save(ville,quartier,typeservice){

    let userid:string;
    userid=1+"";
   let array :string[]=[ville,quartier,typeservice,this.offre.max_accepte,this.offre.desction,this.offre.dateOffre,userid];
   console.log("date offre"+this.offre.dateOffre);
 console.log(array+"arraaaaaaaaaaaaaaaaaay");
this.http.post(this.url4,array).subscribe(

    data => {
      if(data>0) {

        console.log(this.offre+"aaaaaaaaaaaaaaa");
        this.offre = null;

      }

    }, error => {
      console.log('error');
    }
  );

}
///ma partie
// recuper une seule offre//
  private Url11 = 'http://localhost:8090/covid19-api/offre';
  getOffre2(id: number): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.Url11}/${id}`);
  }
  deleteUsreOffre(id: number) {
    return this.http.delete(`${this.Url11}/${id}`);
  }
  public save2(offre: Offre):Observable<object>{
    return this.http.put(`${this.Url11}/${offre.id}`,offre);
    console.log('saved');
  }


}
