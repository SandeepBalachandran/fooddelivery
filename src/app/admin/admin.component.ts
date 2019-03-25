import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';
import {Router} from '@angular/router';


export interface Agent {
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

  constructor(private service: ServicesService, private router: Router) { }

  displayedColumns: string[] = [
    'event_name', 'food_type', 'quantity', 'agent', 'receiver', 'address', 'donor_name', 'donor_address',
    'checked', 'completed', 'delivered', 'actions'];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  agentPopup = false;
  baseUrl; any;
  incomingData = [];
  disabled = true;
  dropdownagents: any;
  dropdownreciever: any;
  agentselected: any;
  recieverselected: any;
  agent: any;
  receiver: any;

  agents: Agent[] = [this.dropdownagents];

  ngOnInit() {
    // if(localStorage.getItem('role_of_this_dude')=="admin")
    // {
      this.loaddata();
      this.loaddropdownagents();
      this.loaddropdownreceivers();
    // }
    // else
    // {
    //   this.router.navigate(['/dashboard'])
    // }
  }

  loaddata() {
    // this.loading = true;
    this.service.getdontations().subscribe(
      data => {
        this.processdata(data);
      }
    );


  }

  loaddropdownagents() {
    this.service.getagentsfordropdown().subscribe(
      data => {
        this.dropdownagents = data;
        console.log(data);
      }
    );

  }

  loaddropdownreceivers() {
    this.service.getreceiversfordropdown().subscribe(
      data => {
        this.dropdownreciever = data;
        console.log(data);
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
  assign() {
    console.log(this.agentselected, this.recieverselected);
    if (this.agentselected != undefined && this.recieverselected != undefined) {
      this.service.assignagent(this.agentselected).subscribe(
        data => {
          console.log(data);
        }
      );

      this.service.assignreceiver(this.recieverselected).subscribe(
        data => {
          console.log(data);
        }
      );
    }

  }
}

