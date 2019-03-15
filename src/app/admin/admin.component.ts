import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from "../services.service";


export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['name', 'useranme', 'role', 'address','mobilenumber','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;




  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loaddata();
  }
  agent_popup=false;
  baseUrl;any;

  loaddata()
  {
    this.loading = true;
    this.service.getagents().subscribe(
      data => 
      {
        console.log(data);
        console.log(data.address);
        this.processdata(data)


      },
      
    );
  }
  incomingData=[];

  processdata(data:any)
  {
    this.incomingData=data;
    console.log('h')
    console.log(this.incomingData)
  }

  assignData()
  {
    this.agent_popup=true;
  }



  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


}
export interface PeriodicElement {
  name: string;
 
  useraname:string;
  role:string;
  address:string;
  mobilenumber:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', useranme: 1.0079, role:'sdf',address:'sfds',mobilenumber:'sfdsf'}
  
];