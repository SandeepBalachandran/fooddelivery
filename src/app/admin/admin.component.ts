import { Component, OnInit } from '@angular/core';



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



  constructor() { }

  ngOnInit() {
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  agent_popup:any;

  openModal()
  {
    this.agent_popup=true;
  }

}
