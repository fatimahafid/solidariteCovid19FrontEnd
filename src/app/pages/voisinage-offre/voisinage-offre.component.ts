import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AjouteroffreComponent} from '../ajouteroffre/ajouteroffre.component';

@Component({
  selector: 'app-voisinage-offre',
  templateUrl: './voisinage-offre.component.html',
  styleUrls: ['./voisinage-offre.component.css']
})
export class VoisinageOffreComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AjouteroffreComponent, {
      width: '400px',
      data: {titre: 'Ajouter une offre'},
      panelClass: 'mypopup'

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  ngOnInit(): void {
  }
}
