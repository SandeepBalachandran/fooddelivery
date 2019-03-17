import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

 

export class ServicesService {
	baseUrl = 'http://ec2-18-191-120-45.us-east-2.compute.amazonaws.com:3804/';
  
  


     httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      }),

      withCredentials: true
    };

  constructor( private http: HttpClient) 
  {

  }
  
  getagents() 
  {
    return this.http.get<any>(this.baseUrl + 'agents');
  }

  getdontations() 
  {
    return this.http.get<any>(this.baseUrl + 'alldonations');
  }

  getreceivers() 
  {
    return this.http.get<any>(this.baseUrl + 'receivers');
  }

  login(username:any,password:any) 
  {
    const input = new FormData();
    console.log(username,password)
    input.append('username', username);
    input.append('password', password);
    return this.http.post<any>(this.baseUrl + 'login',input,this.httpOptions);
  }



        
}
