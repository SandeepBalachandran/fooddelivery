import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

 

export class ServicesService {
	baseUrl = 'http://ec2-18-191-120-45.us-east-2.compute.amazonaws.com:3804/';
	httpGetOptions = {
        withCredentials: true
    };

  constructor( private http: HttpClient) { }

   getagents() {return this.http.get<any>(this.baseUrl + 'agents');}
        
}
