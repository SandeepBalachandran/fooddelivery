import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';
import {MatSnackBar} from '@angular/material';


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

  constructor(private service: ServicesService,private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['name', 'useranme', 'role', 'address', 'mobilenumber', 'actions'];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  agentPopup = false;
  baseUrl; any;
  incomingData = [];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Person 1'},
    {value: 'pizza-1', viewValue: 'Person 2'},
    {value: 'tacos-2', viewValue: 'Person 3'}
  ];

  ngOnInit() {
    this.loaddata();
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


   openSnackBar() {
    this.snackBar.open("Process Completed", "Close", {
      duration: 10000,
    });
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

