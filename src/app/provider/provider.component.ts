import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { ServicesService } from '../services.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  constructor(private service: ServicesService,private snackBar: MatSnackBar ) { }

  ngOnInit() 
  {
    this.loaddata();
  }

  eventname:any;
  eventtime:any;
  foodtype:any;
  quantity:any;
  address:any;
  donorname:any;
  donormobile:any;
  donoraddress:any;
  pickuptime:any;
  pickupdate:any;
  agent=0;
  receiver=0;
  checked=0;
  pickup=0;
  delivery=0;
  complete=0;

  loaddata() {

  }

  savedata()
  {
    console.log(this.donorname,this.eventname,this.foodtype,this.eventtime,this.quantity,this.address,this.donoraddress,this.donormobile,this.pickuptime,this.pickupdate

    )

    this.service.savedonation(this.donorname,this.eventname,this.foodtype,this.eventtime,this.quantity,this.address,this.donoraddress,this.donormobile ,this.agent,
      this.receiver,this.checked,this.pickup,this.delivery,this.complete,this.pickuptime,this.pickupdate).subscribe(
        data => {
          console.log(data)
          if(data.affectedRows)
          {
            this.snackBar.open("Datas Stored Succesfully", "Close", {
              duration: 2000,
            });
          }
          else
          {
            this.snackBar.open("Error-Do it again", "Close", {
              duration: 2000,
            });
          }
        }
      );
  }
  reset()
  {
    this.donorname='';this.eventname='';this.foodtype='';this.eventtime='';this.quantity='';this.address='';this.donoraddress='';this.donormobile=''
  }

  dateChange(event,newDate: any)
  {
    console.log(event.target.value);
    // this.roomsFilter.date = event;
    // this.getData(this.roomsFilter.date);
  }
  roomsFilter:any

  public onDate(event): void {
    this.roomsFilter.date = event;
    this.getData(this.roomsFilter.date);
  }

  getData(date)
  {
    console.log(date);
  }

}
export interface Food {
  value: string;
  viewValue: string;
}

