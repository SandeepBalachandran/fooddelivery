import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from "../services.service";
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns=[];
  dataSource;

  columnNames = [
                  { id: "name",value: "Name"}, 
                  { id: "username",value: "Username"},
                  {id: "role",value: "Role"},
                  {id: "address",value: "Address"},
                  {id: "phone",value: "Mobile Number"},
                  {id: "actions",value: "Actions"}
                ] ;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.displayedColumns = this.columnNames.map(x => x.id);
  
    this.loaddata();
  }
  agent_popup=false;
    

  loaddata()
  {
    // this.loading = true;
    this.service.getagents().subscribe(
      data => 
      {
        this.createTable(data)
      },);
  }
  assignData()
  {
    this.agent_popup=true;
  }

 
  createTable(data:any) 
  {
    let tableArr: PeriodicElement[] = [
      { 
        name:data[0].name, 
        username: data[0].username, 
        role:data[0].role,
        address:data[0].address,
        phone:data[0].mobile_no
      }];
    this.dataSource = new MatTableDataSource<PeriodicElement>(tableArr);
  }


}
export interface PeriodicElement {
  name: string;
  username:string;
  role:string;
  address:string;
  phone:number;
}
