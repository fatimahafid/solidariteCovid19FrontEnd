import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Offre} from "../model/offre.model";
import {User} from "../model/user.model";
import {TypeService} from '../model/type-service.model';
import {Ville} from "../model/ville.model";
import {Quartier} from "../model/quartier.model";
import {OffreAccepte} from "../model/offre-accepte.model";
import {Demande} from "../model/demande.model";
@Injectable({
  providedIn: 'root'
})

export class DemandeService {

  private _demande : Demande;
  private _demandes : Array<Demande>;
  private _user : User;
  private _ville :Ville;
  private _typeservice :TypeService;
  private _quartier :Quartier;
  private _participant :User;
  private _pseudolist : Array<Demande>;


  get pseudolist(): Array<Demande> {
    return this._pseudolist;
  }

  set pseudolist(value: Array<Demande>) {
    this._pseudolist = value;
  }

  get demande(): Demande {
    if(this._demande==null)
      this._demande=new Demande();
    return this._demande;
  }

  set demande(value: Demande) {
    this._demande = value;
  }

  get demandes(): Array<Demande> {
    if(this._demandes==null)
      this._demandes=new Array();
    return this._demandes;
  }

  set demandes(value: Array<Demande>) {
    this._demandes = value;
  }

  get participant(): User {
    return this._participant;
  }

  set participant(value: User) {
    this._participant = value;
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


 /* if(this._offre==null)
  this._offre=new Offre();
  **/

  private url2 = 'http://localhost:8090/covid19-api/demande/';
  private url4 = 'http://localhost:8090/covid19-api/demande/';
  private url5 = 'http://localhost:8090/covid19-api/demande/id';
  private url6 = 'http://localhost:8090/covid19-api/demande/libelle';
  private url7 = 'http://localhost:8090/covid19-api/demande/nom';

  constructor(private http:HttpClient) {
 }


  getAllDemande() {
      this.http.get<Array<Demande>>(this.url2).subscribe(data =>{

        this.demandes=data;

    });


 console.log(this.demandes+"liste demande");

  }


  getdemandebyville(id: number): Array<Demande> {
    console.log("findbyville");
      this.http.get<Demande[]>(this.url5+'/'+id).subscribe(data =>{
      this.demandes=data  ;
      console.log(data)});
    return  this.demandes;
  }
  getdemandebyquartier(nom: string): Array<Demande> {
    console.log("findbyquartier");

    this.http.get<Demande[]>(this.url7+'/'+nom).subscribe(data =>{
      this.demandes=data  ;
      console.log(data)});
    return  this.demandes;
  }
  getdemandebytypeservice(libelle: string): Array<Demande> {
    console.log("findbytypeservice");

    this.http.get<Demande[]>(this.url6+'/'+libelle).subscribe(data =>{
      this.demandes=data  ;
      console.log(data)});
    return  this.demandes;
  }

 save(ville,quartier,typeservice){

    let iduser:string;
    iduser=1+"";
   let array :string[]=[ville,quartier,typeservice,this.demande.description,this.demande.dateDemande,iduser];
   const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
 console.log(array+"arraaaaaaaaaaaaaaaaaay");
this.http.post(this.url4,array,{headers}).subscribe(
    data => {
      if(data>0) {

        console.log(this.demande+"aaaaaaaaaaaaaaa");
        this.demande = null;

      }

    }, error => {
      console.log('error');
    }
  );

}


  participer(iduserr :number,d:Demande){

    console.log("in serviiiiiiiiiiice"+d.id);
    //d=new Demande();
    //d.id=1;
    let userp :User;
    userp=new User();
    d.participant=userp;
    d.participant.id=iduserr;
    console.log("new participant"+d);

    //let array :number[]=[iddemande,iduserr];
   // console.log(array);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    console.log("in participer demande method"+d.participant.id);

     this.http.put('http://localhost:8090/covid19-api/demande/id/'+d.id,d,{headers}).subscribe(

       data => {

           console.log(this.demande+"yyy");



       }, error => {
         console.log('error');
       }
     );
    console.log("after  participter");

  }
  ///////ma partie
  private Url11 = 'http://localhost:8090/covid19-api/demande';
  //recuper une seule offre//

  getdemande(id: number): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.Url11}/${id}`);
  }
  deleteUsreDemande(id: number) {
    return this.http.delete(`${this.Url11}/${id}`);
  }
  public save2(){
    return this.http.put(`${this.Url11}/${this.demande.id}`,this.demande).subscribe(
      data=>{
        console.log('saved');
      },error => {
        console.log('not saved');
      }
    );
  }
  public updatememande(demande: Demande){
    return this.http.put(`${this.Url11}/update/${demande.id}`,demande).subscribe(
      data=>{
        console.log('saved');
      },error => {
        console.log('not saved');
      }
    );
  }


}
