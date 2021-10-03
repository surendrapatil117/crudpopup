import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

@Input() empnamepar:string;
@Input() rowData;
@Input() mydata;
  constructor() { }

  ngOnInit(): void {

this.mydata.forEach(element => {
  console.log(element.name)
  console.log(element.email)
  console.log(element.mobno)
  
});

  }

}
