import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ApiService} from './shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AgGridModule} from 'ag-grid-angular';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    DemoComponent,
    EmployeeComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AgGridModule.withComponents([BtnCellRendererComponent])
    
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
