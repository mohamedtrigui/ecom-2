import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Conge } from 'src/app/models/conge';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss'],
})
export class CongeComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'nombre de jours',
    'date de sortie',
    'date de retour',
    'état',
  ];
  dataSource = new MatTableDataSource<Conge>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: Conge[] = [
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('11/18/2020'),
    dateRetour: new Date('11/18/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('11/18/2020'),
    dateRetour: new Date('11/18/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('11/18/2020'),
    dateRetour: new Date('11/18/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('11/18/2020'),
    dateRetour: new Date('11/18/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('11/18/2020'),
    dateRetour: new Date('11/18/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('11/18/2020'),
    dateRetour: new Date('11/18/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('11/18/2020'),
    dateRetour: new Date('11/18/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('11/18/2020'),
    dateRetour: new Date('11/18/2020'),
    etat: 'En Attente',
  },
];
