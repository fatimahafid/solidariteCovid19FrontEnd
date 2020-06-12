import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  images = [
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
    'assets/login-signin/Images/image22.jpeg',
  ];
  online: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
