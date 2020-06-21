import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {DatePipe} from '@angular/common';
import {StatutIsolement} from "../model/statut-isolement.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8090/api/users/';
  private baseUrl1 = 'http://localhost:8090/api/users/5';
  islogin = false;
  admin = false;
  suser = false;
  choixmenu  = 'A';
  listData: User[];
  public dataForm: FormGroup;
  constructor(private http: HttpClient, private datePipe: DatePipe,private user:User) { }
  login(login: String): Observable<Object> {

    return this.http.get(`${this.baseUrl1}/${login}`);
  }

  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }

  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);
  }
  transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  get User(): User {
    if (this.user == null){ // asurer l'instanciation
      this.user = new User();
    }
    return this.user;
  }
  set User(value: User) {
    this.user = value;
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
  getUserbyLogin(login: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl1}/${login}`);
  }
}
