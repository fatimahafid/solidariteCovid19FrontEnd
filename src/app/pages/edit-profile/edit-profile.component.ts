import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from '../../controller/service/user.service';
import {User} from '../../controller/model/user.model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  private fileName: string;
  private selectedFiles: any;
  constructor(private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, public toastr: ToastrService, private router: Router) { }
  ngOnInit() {
    this.getUserByLogin();
    console.log(this.User);
    this.firstFormGroup = this._formBuilder.group({
      nom: ['', [Validators.minLength(3)]],
      prenom: ['', [Validators.minLength(3)]]
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', [Validators.email]],
      tel: ['', [Validators.minLength(10)]]
    });
    this.thirdFormGroup = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordC: ['', [Validators.required]]
    }, {
        validator: this.ConfirmedValidator('password', 'passwordC')
      }
    );
  }
  getUserByLogin(){
    this.userService.getUserbyLogin(localStorage.getItem('profileLogin')).subscribe(
      response => {
        this.User = response;
      }
    );
  }
  updateUser(){
    this.getUserByLogin();
    console.log(this.User);
    if (this.firstFormGroup.value.nom !== ''){
      this.User.nom = this.firstFormGroup.value.nom;
    }
    if (this.firstFormGroup.value.prenom !== ''){
      this.User.prenom = this.firstFormGroup.value.prenom;
    }
    if (this.secondFormGroup.value.email !== ''){
      this.User.email = this.secondFormGroup.value.email;
    }
    if (this.secondFormGroup.value.tel !== ''){
      this.User.tel = this.secondFormGroup.value.tel;
    }
    if (this.thirdFormGroup.value.password !== ''){
      this.User.password = this.thirdFormGroup.value.password;
    }
    this.userService.updatedata(this.User.id, this.User).subscribe(
      response => {
        this.toastr.success('mise à jour avec Succes');
      });
  }
  get User(): User {
    return this.userService.User;
  }

  set User(value: User) {
    this.userService.User = value;
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
    };
  }
  get f1(){
    return this.firstFormGroup.controls;
  }
  get f2(){
    return this.secondFormGroup.controls;
  }
  get f3(){
    return this.thirdFormGroup.controls;
  }
  get FileName(): string{
    return this.fileName;
  }
  set FileName(value: string){
    this.fileName = value;
  }
  get SelectedFiles(): any{
    return this.selectedFiles;
  }
  set SelectedFiles(value: any){
    this.selectedFiles = value;
  }
  detectfile(event) {
    let path: string;
    path = event.target.value;
    let toArray = path.split(':');
    console.log(toArray);
    this.FileName = toArray[4];
    this.SelectedFiles = event.target.files;
    this.FileName = this.SelectedFiles[0].name;
    console.log(this.FileName);
    this.getUserByLogin();
    this.User.image = this.FileName;
    this.userService.updatedata(this.User.id, this.User).subscribe(
      response => {
        console.log(this.User);
        this.toastr.success('image mise à jour avec Succes');
      });
  }
}
