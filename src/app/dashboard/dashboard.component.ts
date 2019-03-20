import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'event_name', 'food_type', 'quantity','agent','receiver','address','donor_name','donor_address',
    'checked','completed','delivered'];


  centered = false;
  disabled = true;
  unbounded = false;

  checked = false;
  completed=false;
  delivered=false;
  indeterminate = false;
  labelPosition = 'after';


  radius: number;
  color: string;


  constructor(private service: ServicesService) { }

  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource: any;

  agentPopup = false;
  baseUrl; any;
  incomingData = [];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  role:any;
  name:any;

  ngOnInit() {
    this.loaddata();
    this.role=localStorage.getItem('role_of_this_dude');
    this.name=localStorage.getItem('name_of_this_dude');
    // console.log(this.role,this.name)
  }
  checkeddata:any;
  completeddata:any;
  delivereddata:any;

  loaddata() {
    // this.loading = true;
    this.service.getdontations().subscribe(
      data => {
        this.processdata(data);
        this.checkeddata=data.checked?false:true;
        console.log(this.checkeddata)
        this.completeddata=data.complete?true:false;
        this.delivereddata=data.delivery?true:false;
      }
    );
  }

  processdata(data: any) {
    this.incomingData = data;
    this.ELEMENT_DATA = data;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    // console.log(this.ELEMENT_DATA);
  }

  assignData() {
    this.agentPopup = true;
  }
 
}
export interface Food {
  value: string;
  viewValue: string;
}