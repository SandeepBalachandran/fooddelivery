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
  getdataforagentpage(agentid) 
  {
    let body = `agent=${agentid}`;
    return this.http.post<any>(this.baseUrl + 'agents_donation',body,this.httpOptions);
  }

  getdataforreceiverpage(receiverid) 
  {
    let body = `receiver=${receiverid}`;
    return this.http.post<any>(this.baseUrl + 'receivers_donation',body,this.httpOptions);
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

  register(name,address,username,password,mobilenumber,role) 
  {
    console.log(name,address,username,password,mobilenumber,role)

    let body = `username=${username}&password=${password}&name=${name}&address=${address}&mobile_no=${mobilenumber}&role=${role} `;
    return this.http.post<any>(this.baseUrl + 'regs', body, this.httpOptions);
  }

  login(username: any, password: any)
  {
    let body = `username=${username}&password=${password}`;
    return this.http.post<any>(this.baseUrl + 'login', body, this.httpOptions);
  }

  getagentsfordropdown()
  {
    return this.http.get<any>(this.baseUrl + 'agents');
  }

  getreceiversfordropdown()
  {
    return this.http.get<any>(this.baseUrl + 'receivers');
  }

  savedonation(donorname,eventname,foodtype,eventtime,quantity,address,donoraddress,donormobile,agent,receiver,checked,pickup,delivery,complete)
  {
    let body = `event_name=${eventname}&food_type=${foodtype}&event_time=${eventtime}&address=${address}&quantity=${quantity}&donor_name=${donorname}&donor_address=${donoraddress}&donar_mobile=${donormobile}&agent=${agent}&receiver=${receiver}&checked=${checked}&pickup=${pickup}&delivery=${delivery}&complete=${complete}`;
    return this.http.post<any>(this.baseUrl + 'add_donations', body, this.httpOptions);
  }
  
}
