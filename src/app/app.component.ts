import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
//import {Sort} from '@angular/material/sort';

export interface CustomerName {
  name: string;
  position: number;
  gmail: string;
  mobile: number;
  city: string;
}

const ELEMENT_DATA: CustomerName[] = [
  { position: 1, name: 'Jainam', gmail: 'jainam@gmail.com', mobile: 9898568176, city: 'Bharuch' },
  { position: 2, name: 'Raj', gmail: 'raj@gmail.com', mobile: 7405324240, city: 'Vadodara' },
  { position: 3, name: 'Mayur', gmail: 'mayur@gmail.com', mobile: 9033428125, city: 'Anand' },
  { position: 4, name: 'Dipika', gmail: 'dipika@gmail.com', mobile: 9439508439, city: 'Nadiad' },
  { position: 5, name: 'Ajay', gmail: 'ajay@gmail.com', mobile: 9898387757, city: 'Bharuch' },
  { position: 6, name: 'Hitesh', gmail: 'hitesh@gmail.com', mobile: 9898132472, city: 'Ahmedabad' },
  { position: 7, name: 'Rupa', gmail: 'rupa@gail.com', mobile: 9409419485, city: 'Rajkot' },
  { position: 8, name: 'Prajesh', gmail: 'prajesh@gmail.com', mobile: 9924073265, city: 'Surat' },
  { position: 9, name: 'Nainshi', gmail: 'nainshi@gmail.com', mobile: 9099063625, city: 'Valsad' },
  { position: 10, name: 'Kirit', gmail: 'kirit@gmail.com', mobile: 8780137564, city: 'Gandhinagar' },
  { position: 11, name: 'Daxa', gmail: 'daxa@gmail.com', mobile: 8745698512, city: 'Surat' },
  { position: 12, name: 'Kushal', gmail: 'kushal@gail.com', mobile: 8855221144, city: 'Ahmedabad' },
  { position: 13, name: 'Shail', gmail: 'shail@gmail.com', mobile: 7412589632, city: 'Vadodara' },
  { position: 14, name: 'Karan', gmail: 'karan@gmail.com', mobile: 9517534568, city: 'Valsad' },
  { position: 15, name: 'Prakshal', gmail: 'prakshal@gmail.com', mobile: 7569842546, city: 'Anand' },

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'gmail', 'mobile', 'city'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
  }


  logdata(row) {
    console.log(row);
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}



