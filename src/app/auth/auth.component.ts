import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

username: string;
password: string;

  ngOnInit() {
  }

  login() : void 
  {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["provider"]);
    }else {
      alert("Invalid credentials");
    }
  }
  
}
