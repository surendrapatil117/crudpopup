import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  currentDate = new Date();
  model: NgbDateStruct;
  closeResult = '';
  myForm:FormGroup;  
  color='red';
  myname:string='Interpolation';
  show = true;
  modela = {
    left: true,
    middle: false,
    right: false
  };
  currentRate = 8;

  EmployeeArr=['Surendra','Mukund','Dhanashree'];

  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
   
    // dateRange: new FormControl([
    //   new Date(),
    //   new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
    // ])
  });

  constructor(private modalService:NgbModal) { }



  ngOnInit(): void {
    this.myForm = new FormGroup({          
      'name':new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
      'email':new FormControl(null,Validators.email)

 })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
