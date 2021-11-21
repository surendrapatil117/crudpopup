import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  invalidToken: boolean = true;
  constructor(private apiservice:ApiService){}

  ngOnInit(): void {
    this.invalidToken=this.apiservice.content.value;//this.apiservice.validatejwttoken();
    console.log('ngOnInit Nav-bar'+this.invalidToken)
  }

}
