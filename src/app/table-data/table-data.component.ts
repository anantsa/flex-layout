import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {
  displayedColumn: string[] = ['position', 'name', 'weight', 'symbol','status'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status: "Approved" },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status: "Approved" },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status: "Declined" },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: "Approved" }
];

