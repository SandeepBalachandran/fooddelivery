import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { AgentComponent } from './agent/agent.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

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
	{
		path:'dashboard',
		component:DashboardComponent
	},
	{
		path:'admin',
		component:AdminComponent
	},
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
