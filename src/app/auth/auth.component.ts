
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ServicesService } from '../services.service';
import { DataSource } from '@angular/cdk/table';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {MatSnackBar} from '@angular/material';


export interface Role {
  value: string;
  viewValue: string;
}
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
username_login:string;
password_login:string;

roles: Role[] = [
  {value: 'agent', viewValue: 'agent'},
  {value: 'admin', viewValue: 'admin'},
  {value: 'receivers', viewValue: 'receivers'}
];

  ngOnInit() {
  }

  openSnackBar() 
  {
   
  }
  whologgedin:any;
  supername:any;

  login() {
    if(this.username_login=='')
    {
      this.snackBar.open("username required", "Close", {
        duration: 2000,
      });

    }

    else if(this.password_login=='')
    {
      this.snackBar.open("Password required", "Close", {
        duration: 2000,
      });

    }
    else
    {
        this.service.login(this.username_login, this.password_login).subscribe(
          data => {
            if(data)
            {
              console.log(data);
              this.whologgedin=data.role
              this.supername=data.name
              console.log(this.whologgedin)
              localStorage.setItem('role_of_this_dude', this.whologgedin);
              localStorage.setItem('name_of_this_dude', this.supername);
              // if(data.role=="admin")
              // {
              //   this.router.navigate(['/admin'])
              // }
              // else if(data.role=="receiver")
              // {
              //   this.router.navigate(['/receiver'])
              // }
              // else 
              // {
              //   this.router.navigate(['/agent'])
              // }
              this.router.navigate(['/dashboard'])
            }
            else
            {
              this.snackBar.open("Wrong credentials", "Try Again", {
                duration: 2000,
              });

            }
             
             
            
           
          },

        );
    }
  }

  selected(event) {
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);
}

getInnerText(text)
{
  this.role=text;
}


  register() {
    // console.log(this.name,this.address,this.username,this.password,this.mobile,this.role)
    if(this.username=='')
    {
      this.snackBar.open("username required", "Close", {
        duration: 10000,
      });

    }

    else if(this.password=='')
    {
      this.snackBar.open("Password required", "Close", {
        duration: 10000,
      });

    }
    else
    {
      this.service.register(this.name,this.address,this.username,this.password,this.mobile,this.role).subscribe(data => {
        this.snackBar.open("Registered Succesfully", "Close", {
          duration: 10000,
        });
      });
    }

  }

}
