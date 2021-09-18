import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  color='red';
  myname:string='Interpolation';

  EmployeeArr=['Surendra','Mukund','Dhanashree'];

  constructor() { }

  ngOnInit(): void {
  }

}
