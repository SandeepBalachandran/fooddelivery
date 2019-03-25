import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';



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
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit 
{
  displayedColumns: string[] = [
    'event_name', 'food_type', 'quantity','agent','receiver','address','donor_name','donor_address',
    'checked','completed','delivered'];


  centered = false;
  disabled = false;
  unbounded = false;

  checked = false;
  completed=false;
  delivered=false;
  indeterminate = false;
  labelPosition = 'after';


  radius: number;
  color: string;


  constructor(private service: ServicesService,private router: Router,private snackBar: MatSnackBar ) { }

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

  role:any;
  name:any;

  ngOnInit() {
    // if(localStorage.getItem('role_of_this_dude')=="agent")
    // {
      this.loaddata();
    // }
    // else
    // {
    //   this.router.navigate(['/dashboard'])
    // }
  }
  agentid=1;
  loaddata() 
  {
    // this.loading = true;
    this.service.getdataforagentpage(this.agentid).subscribe(
      data => {
        this.processdata(data);
        console.log(data)
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
  donationid:any;

  agentdonationchecked(donationid)
  {
    this.service.agentdonationchecked(donationid).subscribe(
      data => {
        if(data)
        {
          this.snackBar.open("Checked Succesfully", "Close", {
            duration: 2000,
          });

        }
       
      }
    );

  }
  agentdonationpickup(donationid)
  {
    this.service.agentdonationpickup(donationid).subscribe(
      data => {
        if(data)
        {
          this.snackBar.open("Pickedup Succesfully", "Close", {
            duration: 2000,
          });
          
        }
        
      }
    );

  }
  agentdonationdelivery(donationid)
  {
    this.service.agentdonationdelivery(donationid).subscribe(
      data => {
        if(data)
        {
          this.snackBar.open("donated Succesfully", "Close", {
            duration: 2000,
          });
          
        }
        
      }
    );

  }
 
}
export interface Food {
  value: string;
  viewValue: string;
}

