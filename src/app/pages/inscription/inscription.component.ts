import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../../controller/service/user.service";
import {User} from "../../controller/model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private _user : User ,private route: Router,public crudApi: UserService ,public fb: FormBuilder,public toastr: ToastrService) { }

  ngOnInit(): void {
    this.infoForm();
  }

  vers_connextion() {
   this.route.navigate(['login']);
  }

  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: 0,
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom : ['', [Validators.required, Validators.minLength(3)]],
      login: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmepassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required]],
    },{
      validator: this.ConfirmedValidator('password', 'confirmepassword')
    });
  }

  ResetForm() {
    this.crudApi.dataForm.reset();
  }
  onSubmit() {
    this.crudApi.login(this.user.login).subscribe(
      data=>{
        this.toastr.warning( 'ce login exste deja')
      },
      error=>{
    if (this.crudApi.dataForm.value.password == this.crudApi.dataForm.value.confirmepassword)
    {

      this.addData();
      this.vers_connextion();
    }
    else
    {
      this.toastr.warning( 'Vérifiet votre de passe ...');
    }
      }

    );


  }



  addData() {
    this.crudApi.createData(this.crudApi.dataForm.value).
    subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');

    });
  }

  get user():User{
    return this._user
  }

  get f(){
    return this.crudApi.dataForm.controls;
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }



}
