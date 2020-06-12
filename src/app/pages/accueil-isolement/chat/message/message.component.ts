import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
my_message:boolean = true;

  @Input()
  message;
  @Input()
  owner;
  constructor() { }
  ngOnInit(): void {
  }

}
