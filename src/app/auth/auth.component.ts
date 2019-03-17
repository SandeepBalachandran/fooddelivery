
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';
import { DataSource } from '@angular/cdk/table';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private service: ServicesService) { }

username: string;
password: string;

  ngOnInit() {
  }

  login() {

    this.service.login(this.username, this.password).subscribe(
      data => {
        console.log(data);
      },

    );
  }
  register() {
    this.service.register().subscribe(data => {
      console.log(data);
    });

  }

}
