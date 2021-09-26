import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.css']
})

export class BtnCellRendererComponent implements OnInit,ICellRendererAngularComp  {

  private params: any;
  data: any;

  agInit(params) {
    this.params=params;
    this.data = params.value;
  }

  refresh(): boolean {
    return false;
  }

  constructor() { }
  ngOnInit(){
    
  }
  btnClickedHandler()
  {

    console.log(this.params)
    console.log(this.params.data)
    console.log(this.params.data.email)
  }
  btnDelet()
  {
    console.log(this.params)
    console.log(this.params.data)
    console.log(this.params.data.email)

  }

}
