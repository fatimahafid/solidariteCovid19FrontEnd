import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-enseignement',
  templateUrl: './accueil-enseignement.component.html',
  styleUrls: ['./accueil-enseignement.component.css']
})
export class AccueilEnseignementComponent implements OnInit {

  constructor() { }
  images = ['../../../assets/accueil-Enseignement/el.jpg', '../../../assets/accueil-Enseignement/el4.jpg', '../../../assets/accueil-Enseignement/el2.jpg'];

  ngOnInit(): void {
  }

}
