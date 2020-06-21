import {Component, Input, OnInit} from '@angular/core';
import {StatutIsolementService} from "../../../controller/service/statut-isolement.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
