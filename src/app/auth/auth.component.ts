
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';
import { DataSource } from '@angular/cdk/table';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private service: ServicesService,private snackBar: MatSnackBar) { }

username: string;
password: string;
name:string;
address:string;
role:string;
mobile:string;

  ngOnInit() {
  }

  openSnackBar() 
  {
   
  }
  whologgedin:any;
  supername:any;

  login() {

    this.service.login(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.whologgedin=data.role
        this.supername=data.name
        console.log(this.whologgedin)
        localStorage.setItem('role_of_this_dude', this.whologgedin);
        localStorage.setItem('name_of_this_dude', this.supername);
        this.router.navigate(['/dashboard'])
      },

    );
  }
  register() {
    console.log(this.name,this.address,this.username,this.password,this.mobile,this.role)
    this.service.register(this.name,this.address,this.username,this.password,this.mobile,this.role).subscribe(data => {
      this.snackBar.open("Registered Succesfully", "Close", {
        duration: 10000,
      });
    });

  }

}
