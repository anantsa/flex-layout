import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {
  displayedColumn: string[] = ['position', 'name', 'weight', 'symbol', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

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
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status: "Declined" },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status: "Declined" },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: "Approved" },
  { position: 5, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: "Declined" },
  { position: 6, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: "Approved" },
  { position: 7, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: "Declined" },
];

