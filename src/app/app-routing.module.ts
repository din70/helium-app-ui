import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./usermanagement/usermanagement.module').then(mod => mod.UsermanagementModule)
},
{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule )
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
