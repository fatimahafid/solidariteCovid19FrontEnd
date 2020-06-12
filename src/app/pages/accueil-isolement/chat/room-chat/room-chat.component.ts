import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.css']
})
export class RoomChatComponent implements OnInit {
  image = ['assets/login-signin/Images/personne1.jpg'];
  constructor() { }
  ngOnInit(): void {
  }

}
