import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators, EmailValidator} from '@angular/forms';
import{EmployeeModel} from './employee-model';
import{ApiService} from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  formvalues !:FormGroup;
  employeeData!:any;
  employeemodelObjct:EmployeeModel=new EmployeeModel();


  constructor(private formbulder:FormBuilder,private Api:ApiService) { }

  ngOnInit(): void {
    this.formvalues=this.formbulder.group({
      firstName:['', Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      mobileNo:['',Validators.required],
      salary:['',Validators.required]
    })
    
    this.getAllEmploayee();
  }

  Postmployeedetails()
  {

    this.employeemodelObjct.firstName=this.formvalues.value.firstName;
    this.employeemodelObjct.lastName=this.formvalues.value.lastName;
    this.employeemodelObjct.email=this.formvalues.value.email;
    this.employeemodelObjct.salary=this.formvalues.value.salary;
    this.employeemodelObjct.mobileNo=this.formvalues.value.mobileNo;
 this.Api.postEmploayee(this.employeemodelObjct).subscribe(res=>{
   console.log(res)
   alert('Employee Added Successfully');
   let ref=document.getElementById('cancel')
   ref?.click();
   
   this.formvalues.reset();
   this.getAllEmploayee();
 },
 err=>{
   alert('Somethinmg went wrong')

 })
}


  getAllEmploayee()
  {
    this.Api.getAllEmploayee().subscribe(res=>{
    this.employeeData=res;
    },err=>{
      alert('Somethinmg went wrong')
   
    })

  }

  deleteEmployee(row:any)
  {
    this.Api.deleteemployee(row.id).subscribe(res=>{
      alert('Employeee has been deleted successfully');
      this.getAllEmploayee();
    })

  }

  onEdit(row:any)
  {
    this.employeemodelObjct.id=row.id;

    this.formvalues.controls['firstName'].setValue(row.firstName);
    this.formvalues.controls['lastName'].setValue(row.lastName);
    this.formvalues.controls['email'].setValue(row.email);
    this.formvalues.controls['mobileNo'].setValue(row.mobileNo);
    this.formvalues.controls['salary'].setValue(row.salary);
   

  }
  updateployeedetails()
  {
    this.employeemodelObjct.firstName=this.formvalues.value.firstName;
    this.employeemodelObjct.lastName=this.formvalues.value.lastName;
    this.employeemodelObjct.email=this.formvalues.value.email;
    this.employeemodelObjct.salary=this.formvalues.value.salary;
    this.employeemodelObjct.mobileNo=this.formvalues.value.mobileNo;

    this.Api.updatemployee(this.employeemodelObjct,this.employeemodelObjct.id).subscribe(res=>{
      alert('Employee Updateed Successfully')
      let ref=document.getElementById('cancel')
      ref?.click();
      
      this.formvalues.reset();
      this.getAllEmploayee();
    })

  }

  resetvalues()
  {
    this.formvalues.reset();
  }


}
