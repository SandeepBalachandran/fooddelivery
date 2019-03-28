import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';


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
    selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(private service: ServicesService,private snackBar: MatSnackBar,private router: Router) { }

  displayedColumns: string[] = ['donorname', 'donoraddress', 'donormobile', 'foodtype', 'eventname','eventtime','quantity', 'actions'];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  agentPopup = false;
  baseUrl; any;
  incomingData = [];


  ngOnInit() {
    // this.checkpermission()
    this.loaddata()
   }
  checkpermission()
  {
    if(localStorage.getItem('role_of_this_dude')=="receivers")
    {
      this.loaddata();
    }
    else
    {
      this.router.navigate(['/dashboard'])
    }
  }
  receiverid=1;
  loaddata() {
    // this.loading = true;
    this.service.getdataforreceiverpage(this.receiverid).subscribe(
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
  donationid:any
  value=1;

  assignData(donationid) 
  {
    console.log(donationid,this.value)
    this.service.completedonation(donationid,this.value).subscribe(data => 
      {
        this.snackBar.open("Process Completed", "Close", {
          duration: 10000,
        });

      }
    );

  }

}

