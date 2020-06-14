import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {DatePipe} from "@angular/common";
import {UserService} from "../../controller/service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any={};
  loginname : String;
  password : String;
  name : string;
  Wdate;
  annee : 0;

  constructor(private router: Router,private userService : UserService,
              public toastr: ToastrService,private datePipe : DatePipe) { }
  ngOnInit(): void {
    this.userService.islogin = false;
    this.userService.admin = false;
    this.userService.suser = false;
    this.Wdate = this.transformDate(new Date());
    this.annee = (this.Wdate).toString().substring(0,4);
    localStorage.setItem('annee', this.annee.toString());
  }
  vers_inscription() {
    this.router.navigate(['inscription']);
  }
  login() {

    console.log(this.loginname);

    this.userService.login(this.loginname).subscribe(
      response =>{this.user = response;

        if (this.user.password == this.password)
        {
          this.name = this.user.nom;
          localStorage.setItem('name', this.name);
          this.userService.islogin = true;

          this.userService.suser = true;
          this.toastr.success( 'all good ')
          }

        else
        {
          this.toastr.warning( 'Mot de Passe  Incorrecte ')
        }

      },
      error =>

        this.toastr.warning( 'Login Incorrecte ')


    );

  }

  transformDate(date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('name');

  }
}
