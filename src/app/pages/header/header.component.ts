import { Component, OnInit } from '@angular/core';
import {User} from '../../controller/model/user.model';
import {UserService} from '../../controller/service/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  me: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getuser();
  }
  testLogin(): boolean{
    if (localStorage.getItem('id') == null){return false; }
    else { return true; }
  }
  getuser() {
    this.userService.getUser(+localStorage.getItem('id')).subscribe(
      response => {
        this.me = response;
      }
    );
  }
  versProfile(login: string){
    localStorage.setItem('profileLogin',login);
    this.router.navigate(['profile']);
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('id');

  }
}
