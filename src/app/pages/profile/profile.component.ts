import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  image = ['assets/login-signin/Images/personne1.jpg','assets/login-signin/Images/image33.jpeg']
  constructor(private dialog: MatDialog,config: NgbCarouselConfig) { }
  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '900px',
      height: '350px',
      data: {
        titre:'Modifier la demande',
        ville:'Zagora',
        quartier:'assif B',
        service:'facturation',
        decription:'votre description',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
