import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-accueil-statistics',
  templateUrl: './accueil-statistics.component.html',
  styleUrls: ['./accueil-statistics.component.css']
})
export class AccueilStatisticsComponent implements OnInit {
  public primaryXAxis: Object;
  public chartData: Object[];
  constructor() {
  }

  ngOnInit(): void {
    this.chartData = [
      { month: 'Jan', cas: 35 }, { month: 'Feb', cas: 28 },
      { month: 'Mar', cas: 34 }, { month: 'Apr', cas: 32 },
      { month: 'May', cas: 40 }, { month: 'Jun', cas: 32 },
      { month: 'Jul', cas: 35 }, { month: 'Aug', cas: 55 },
      { month: 'Sep', cas: 38 }, { month: 'Oct', cas: 30 },
      { month: 'Nov', cas: 25 }, { month: 'Dec', cas: 32 }
    ];
    this.primaryXAxis = {
      valueType: 'Category'
    };
  }

  displayedColumns: string[] = ['position', 'Region', 'Nombre_totale', 'Nouveaux_cas'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}

export interface PeriodicElement {
  Region: string;
  position: number;
  Nombre_totale: number;
  Nouveaux_cas: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Region: ' Rabat, Salé, Kénitra', Nombre_totale: 2878, Nouveaux_cas: 10},
  {position: 2, Region: ' Casablanca, Settat', Nombre_totale: 1536, Nouveaux_cas: 10},
  {position: 3, Region: ' Fès, Meknès', Nombre_totale: 	1249, Nouveaux_cas: 6},
  {position: 4, Region: 'Marrakech, Safi', Nombre_totale: 1033, Nouveaux_cas: 2},
  {position: 5, Region: 'Tanger, Tétouan, Al Hoceïma', Nombre_totale: 786, Nouveaux_cas: 1},
  {position: 6, Region: 'Oriental', Nombre_totale: 586, Nouveaux_cas: 0},
  {position: 7, Region: 'Béni Mellal, Khénifra', Nombre_totale: 196, Nouveaux_cas: 0},
  {position: 8, Region: 'Drâa, Tafilalet', Nombre_totale: 127, Nouveaux_cas: 0},
  {position: 9, Region: 'Souss, Massa', Nombre_totale:  90, Nouveaux_cas: 0},
  {position: 10, Region: 'Guelmim, Oued Noun', Nombre_totale: 46, Nouveaux_cas: 0},
  {position: 11, Region: 'NeoLaâyoune, Sakia El Hamran', Nombre_totale: 5, Nouveaux_cas: 0},
  {position: 12, Region: 'Dakhla, Oued Ed Dahabeon', Nombre_totale: 5, Nouveaux_cas: 0},
];
