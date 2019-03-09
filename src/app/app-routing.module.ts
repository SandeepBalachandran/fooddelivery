import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { AgentComponent } from './agent/agent.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/auth', 
		pathMatch: 'full' 
	},
	{
		path: 'auth',
		component: AuthComponent,
	},
	
	{
		path:'agent',
		component:AgentComponent
	},
	{
		path:'provider',
		component:ProviderComponent
	},
	{
		path:'receiver',
		component:ReceiverComponent
	},
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
