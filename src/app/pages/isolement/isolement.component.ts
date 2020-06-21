import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StatutIsolement} from '../../controller/model/statut-isolement.model';
import {StatutIsolementService} from '../../controller/service/statut-isolement.service';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../controller/service/user.service';
import {TypeStatutService} from '../../controller/service/type-statut.service';
import {TypeStatut} from 'src/app/controller/model/type-statut.model';
import {ThemePalette} from '@angular/material/core';
import {MatRadioChange} from '@angular/material/radio';
import {User} from '../../controller/model/user.model';
import {of} from 'rxjs';
import {CommentaireStatutService} from '../../controller/service/commentaire-statut.service';
import {CommentaireStatut} from '../../controller/model/commentaire-statut.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-isolement',
  templateUrl: './isolement.component.html',
  styleUrls: ['./isolement.component.css']
})
export class IsolementComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver, private statutService: StatutIsolementService, private userService: UserService, public toastr: ToastrService
    ,         private typeService: TypeStatutService , private commentaireService: CommentaireStatutService, private router: Router) {
  }

  get statutIsolement(): StatutIsolement {
    return this.statutService.statutIsolement;
  }

  set statutIsolement(value: StatutIsolement) {
    this.statutService.statutIsolement = value;
  }

  get CommentaireStatut(): CommentaireStatut {
    return this.commentaireService.CommentaireStatut;
  }

  set CommentaireStatut(value: CommentaireStatut) {
    this.commentaireService.CommentaireStatut = value;
  }

  get TypeStatut(): TypeStatut {
    return this.typeService.TypeStatut;
  }

  listStatuts: StatutIsolement[];
  listStatutsT2: StatutIsolement[];
  listComments: CommentaireStatut[];
  me: User;
  test = 1;
  private t: StatutIsolement;
  ngOnInit(): void {
    this.getuser();
    this.getData();
    this.fillSide();
  }

  createComponent() {
    this.statutIsolement.id = 0;
    this.statutIsolement.dateStatut = this.statutService.transformDate(Date.now());
    this.statutIsolement.isAccepted = true;
    this.userService.User.id = +localStorage.getItem('id');
    this.statutIsolement.user = this.userService.User;
    this.TypeStatut.id = this.Test;
    this.statutIsolement.typeStatut = this.typeService.TypeStatut;
    this.statutService.createData(this.statutIsolement).subscribe(
      data => {
        this.toastr.success('Statut puplié avec Succes');
        this.statutIsolement.contenu = null;
        this.getData();
        this.fillSide();
      },
      error => {
        console.log('error');
      }
    );
  }

  getData() {
    this.statutService.getAll().subscribe(
      response => {
        this.listStatuts = response;
      }
    );
  }

  getByTypes(type: number) {
    this.statutService.getByType(type).subscribe(
      response => {
        this.listStatuts = response;
      }
    );
  }

  fillSide() {
    this.statutService.getByDestinctUsers(2, +localStorage.getItem('id')).subscribe(
      response => {
        this.listStatutsT2 = response;
      });
  }

  getuser() {
    this.userService.getUser(+localStorage.getItem('id')).subscribe(
      response => {
        this.me = response;
      }
    );
  }
  getComment(statut: number){
    this.listComments = null;
    this.commentaireService.getByStatut(statut).subscribe(
      response => {
        this.listComments = response;
      }
    );
  }
  addComment(idStatut: number){
    this.CommentaireStatut.id = 0;
    this.statutIsolement.id = idStatut;
    this.CommentaireStatut.statutIsolement = this.statutIsolement;
    this.commentaireService.createData(this.CommentaireStatut).subscribe(
      response => {
        this.toastr.success('comment puplié avec Succes');
        this.CommentaireStatut.commentaire = null;
        this.getComment(idStatut);
      }
    );
  }
  verProfile(login: string){
    localStorage.setItem('profileLogin', login);
    this.router.navigate(['profile']);
  }
  get Test(): number{
    return this.test;
  }
  set Test(value: number){
    this.test = value;
  }

  change() {
    console.log(this.test);
    if (this.Test === 1){
      this.Test = 2;
    } else { this.Test = 1; }
    console.log(this.test);
  }
}
