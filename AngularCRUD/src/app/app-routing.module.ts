import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CountdownComponent } from './countdown/countdown.component';
import { RxjstestComponent } from './rxjstest/rxjstest.component';
const routes: Routes = [
  {path:'',component:EmployeeDashboardComponent},
  {path:'demo',component:DemoComponent},
  {path:'countdown',component:CountdownComponent},
  {path:'rxjs',component:RxjstestComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
