import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';


export interface Food {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;

  username: string;
  role: string;
  address: string;
  mobilenumber: number;
}

// let ELEMENT_DATA: PeriodicElement[] = [
//   { name: 'Hydrogen', username: '1.0079', role: 'sdf', address: 'sfds', mobilenumber: 123456}
// ];


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: ServicesService) { }

  displayedColumns: string[] = ['name', 'useranme', 'role', 'address', 'mobilenumber', 'actions'];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  agentPopup = false;
  baseUrl; any;
  incomingData = [];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit() {
    this.loaddata();
  }

  loaddata() {
    // this.loading = true;
    this.service.getagents().subscribe(
      data => {
        this.processdata(data);
      }
    );
  }

  processdata(data: any) {
    this.incomingData = data;
    this.ELEMENT_DATA = data;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    console.log(this.ELEMENT_DATA);
  }

  assignData() {
    this.agentPopup = true;
  }
}

