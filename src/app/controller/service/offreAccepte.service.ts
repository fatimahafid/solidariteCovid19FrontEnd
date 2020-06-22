import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Offre} from "../model/offre.model";
import {User} from "../model/user.model";
import {TypeService} from '../model/type-service.model';
import {Ville} from "../model/ville.model";
import {Quartier} from "../model/quartier.model";
import {OffreAccepte} from "../model/offre-accepte.model";
import {UserService} from "./user.service";
import {OffreService} from "./offre.service";
@Injectable({
  providedIn: 'root'
})

export class OffreAccepteService {
  private _offreAccepte :OffreAccepte;
  private _offre : Offre;
  private _offres : Array<Offre>;
  private _user : User;
  private _ville :Ville;
  private _typeservice :TypeService;
  private _quartier :Quartier;
  private _participations : Array<OffreAccepte>;

  get offreAccepte(): OffreAccepte {
    return this._offreAccepte;
  }

  set offreAccepte(value: OffreAccepte) {
    this._offreAccepte = value;
  }

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
  private url4 = 'http://localhost:8090/covid19-api/offreAccepte/';
  private url5 = 'localhost:8090//api/id';


  constructor(private http:HttpClient,private userservice: UserService,private offreService: OffreService) {
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
       this._participations=data   });
    return  this.participations;
  }


  save(iduserr :number,idoffree:number){

   let array :number[]=[idoffree,iduserr];
   console.log(array);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    /*const u=this.getuserbyid(iduserr);
    console.log("in save method"+u);
     this.offreAccepte.user=u;*/

    this.http.post(this.url4,array,{headers: headers}).subscribe(

      data => {
        if(data>0) {

          console.log(this.offreAccepte+"save");
          this.offreAccepte = null;

        }

      }, error => {
        console.log('error');
      }
    );

  }



  getuserbyid(id :number) : User{
     this.http.get<User>(`${this.url5}/${id}`) .subscribe(response => this.user = response);
    console.log("get userBy Id "+ +"--->" +this.user);
    return this.user;
  }
  ///ma partie
  private Url11 = 'http://localhost:8090/covid19-api/offreAccepte/user';
  private Url22 = 'http://localhost:8090/api'

  getUserOffresAccepter(id: number): Observable<OffreAccepte[]>{
    console.log('status dans  le service  affreAccept : ',this.userservice.islogin);
    return this.http.get<OffreAccepte[]>(`${this.Url11}/${id}`)
  }
  getOffre2(id: number){
    this.offreService.getOffre(id);
  }
  getcountParticipants(id: number): Observable<OffreAccepte[]>{
    return this.http.get<OffreAccepte[]>(`${this.Url11}/count/${id}`)
  }
  //supprimer une offre de l'utilisateur
  deleteUserOffre(id: number): Observable<Object>{
    return this.http.delete(`${this.Url11}/delete/${id}`);
  }
  private Url111 = 'http://localhost:8090/covid19-api/offreAccepte/id';
  getParticipants(id: number): Observable<OffreAccepte[]>{
    return this.http.get<OffreAccepte[]>(`${this.Url111}/${id}`)
  }
  }
