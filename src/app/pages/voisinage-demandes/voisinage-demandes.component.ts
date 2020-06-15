import { Component, OnInit } from '@angular/core';
import { AjouterDemandeComponent } from '../ajouter-demande/ajouter-demande.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-voisinage-demandes',
  templateUrl: './voisinage-demandes.component.html',
  styleUrls: ['./voisinage-demandes.component.css']
})
export class VoisinageDemandesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjouterDemandeComponent, {
      width: '400px',
      data: {titre: 'Ajouter une Demande'},
      panelClass: 'mypopup'

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
  }

}
