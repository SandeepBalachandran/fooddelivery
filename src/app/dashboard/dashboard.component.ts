import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'event_name', 'food_type', 'quantity','agent','receiver','address','donor_name','donor_address','Actions'];


  centered = false;
  disabled = false;
  unbounded = false;

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

  ngOnInit() {
    this.loaddata();
  }

  loaddata() {
    // this.loading = true;
    this.service.getdontations().subscribe(
      data => {
        this.processdata(data);
      }
    );
  }

  processdata(data: any) {
    this.incomingData = data;
    this.ELEMENT_DATA = data;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    console.log(this.ELEMENT_DATA);
  }

  assignData() {
    this.agentPopup = true;
  }
 
}
