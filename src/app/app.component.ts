import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private router: Router){}
  title = 'fooddelivery';
  goto(clicked:any)
  {
  	switch(clicked)
  	{
  		case 'provider':
  		this.router.navigate(['/provider'])
  		break;

  		case 'agent':
  		this.router.navigate(['/agent'])
  		break;

  		case 'receiver':
  		this.router.navigate(['/receiver'])
  		break;

  		case 'auth':
  		this.router.navigate(['/auth'])
  		break;
  	}
  }
}
