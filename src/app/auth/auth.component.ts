
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from "../services.service";
import { DataSource } from '@angular/cdk/table';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router,private service: ServicesService) { }

username: string;
password: string;

  ngOnInit() {
  }

  login() 
  {
   
    // if(this.username == 'admin' && this.password == 'admin'){
    //  this.router.navigate(["provider"]);
    // }else {
    //   alert("Invalid credentials");
    // }

    this.service.login(this.username,this.password).subscribe(
      data => 
      {
        // if(data)
        // {
        //   console.log(data.username)
        //   console.log(data.password)
        // }
        // // if (data[]) 
        // // {
          
        // // } 
        // else 
        // {
        //  console.log('wrong credentials')
        // }
        console.log(data)
      },
      
    );
  }
  register()
  {
    
  }
  
}
