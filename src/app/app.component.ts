import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent 
{
	constructor(private router: Router) { }
	title = 'fooddelivery';

	admin:boolean;
	receiver:boolean;
	agent:boolean;
	role= localStorage.getItem('role_of_this_dude')

	// if(this.role=="admin")
	// {
	// 	this.admin=true;
	// 	this.receiver=false;
	// 	this.agent=false;
	// }

	// if(this.role=="receiver")
	// {
	// 	this.admin=false;
	// 	this.receiver=true;
	// 	this.agent=false;
	// }


	// if(this.role=="agent")
	// {
	// 	this.admin=false;
	// 	this.receiver=false;
	// 	this.agent=true;
	// }

	

	goto(clicked: string) 
	{
		switch (clicked) 
		{
			case 'dashboard':
				this.router.navigate(['/dashboard'])
				break;
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

			case 'admin':
				this.router.navigate(['/admin'])
				break;

			case 'logout':
				localStorage.removeItem('role_of_this_dude')
				localStorage.removeItem('name_of_this_dude')
				this.router.navigateByUrl('/auth');
				break;
		}
	}

	

	
//   this.admin=="admin"?1:0;
//   this.receiver=localStorage.getItem('role_of_this_dude')=='receiver'?1:0;
//   this.agent=localStorage.getItem('role_of_this_dude')=='agent'?1:0;

}
