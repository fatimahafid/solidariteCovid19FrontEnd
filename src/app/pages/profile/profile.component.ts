import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {UserService} from '../../controller/service/user.service';
import {User} from '../../controller/model/user.model';
import {StatutIsolementService} from '../../controller/service/statut-isolement.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  me: User;
  profilOwner: User;
  countStatut: number;
  image = ['assets/login-signin/Images/personne1.jpg', 'assets/login-signin/Images/image33.jpeg'];
  constructor(public dialog: MatDialog, config: NgbCarouselConfig, public userService: UserService, public statutService: StatutIsolementService) { }
  ngOnInit(): void {
    this.getuser();
    this.getUserByLogin();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '900px',
      height: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getuser();
      this.getUserByLogin();
    });
  }
  getuser() {
    // localStorage.getItem('id');
      this.userService.getUser(+localStorage.getItem('id')).subscribe(
      response => {
        this.me = response;
      }
    );
  }
  testProfile(): boolean{
    console.log(localStorage.getItem('profileLogin'));
    console.log(this.me.login);
    if (this.me.login === localStorage.getItem('profileLogin')) { return true; }
    else { return false; }
  }
  getUserByLogin(){
    this.userService.getUserbyLogin(localStorage.getItem('profileLogin')).subscribe(
      response => {
        this.profilOwner = response;
        this.countStatuts(response.id);
    }
    );
  }
  countStatuts(id: number){
    this.statutService.countByUserId(id).subscribe(
      response => {
        this.countStatut = response;
      }
    );
  }
}
