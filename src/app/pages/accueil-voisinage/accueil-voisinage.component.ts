import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-accueil-voisinage',
  templateUrl: './accueil-voisinage.component.html',
  styleUrls: ['./accueil-voisinage.component.css']
})
export class AccueilVoisinageComponent implements OnInit {

  constructor() { }
  images = ['../../../assets/accueil-voisinage/help.jpg', '../../../assets/accueil-voisinage/help2.jpg', '../../../assets/accueil-voisinage/3.jpg'];

  ngOnInit(): void {
  }

}
