import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
const routes: Routes = [
  {path:'',component:EmployeeDashboardComponent},
  {path:'demo',component:DemoComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
