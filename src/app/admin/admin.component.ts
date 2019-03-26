import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';


export interface Agent {
  address: string;
  id:any;
  mobile_no:any;
  name:any;
  password:any;
  role:any;
  username:any;
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

  constructor(private service: ServicesService, private router: Router,private snackBar: MatSnackBar) { }

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
  donationid:any;

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
        // console.log(data.id )
      }
    );


  }

  loaddropdownagents() 
  {
    this.service.getagentsfordropdown().subscribe(
      data => {
        this.dropdownagents = data;
        console.log(data);
      }
    );

  }

  loaddropdownreceivers() 
  {
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
    // console.log(this.ELEMENT_DATA);
  }

  assignData(donation) {
    this.agentPopup = true;
    this.donationid=donation
    console.log(this.donationid)
  }
  assign() {
    console.log(this.agentselected, this.recieverselected);
    if (this.agentselected != undefined && this.recieverselected != undefined) 
    {
      this.service.assignagent(this.agentselected,this.donationid).subscribe(
        data => {
          console.log(data,this.agentselected);
          this.snackBar.open("success", "Close", {
            duration: 2000,
          });
        }
      ); 

      this.service.assignreceiver(this.recieverselected,this.donationid).subscribe(
        data => {
          console.log(data,this.recieverselected);
        }
      );
    }

  }
}

