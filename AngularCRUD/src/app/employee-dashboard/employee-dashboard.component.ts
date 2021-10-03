import { Component, OnInit ,ViewChild} from '@angular/core';
import {FormGroup,FormBuilder, Validators, EmailValidator} from '@angular/forms';
import {EmployeeModel} from './employee-model';
import {ApiService} from '../shared/api.service';
import { Observable } from 'rxjs';
import {AgGridAngular} from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';  


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  formvalues !:FormGroup;
  employeeData!:any;
  employeemodelObjct:EmployeeModel=new EmployeeModel();
  gridOptions: GridOptions;
  private gridApi;
  private gridColumnApi;
  closeResult: string;
  public empname:string;
//   columnDefs=[
//  {
//     field:'firstName'

//  }
//  ];

// columnDefs = [
//   { field: 'make' },
//   { field: 'model' },
//   { field: 'price'}
// ];

// rowData = [
//   { make: 'Toyota', model: 'Celica', price: 35000 },
//   { make: 'Ford', model: 'Mondeo', price: 32000 },
//   { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];


columnDefs = [
  {headerName:"Employe ID", field: 'id',filter:true,checkboxSelection: true },
  {headerName:"First Name",field: 'firstName',filter:true},
  {headerName:"Last Name",field: 'lastName' ,filter:true},
  {headerName:"Email ID",field: 'email',editable:true,filter:true},
  {headerName:"Mobile No",field: 'mobileNo' ,filter:true},
  {headerName:"Salary",field: 'salary' ,filter:true},
  {headerName:"Action",field:'id',cellRendererFramework:BtnCellRendererComponent},
 
  // {headerName: "Actions", cellRendererSelector: 
  //            '<div class="grid-action-cell">'+
  //            '<a ng-click="deleteThisRow(row.entity);" >Delete</a></div>'}
  //checkboxSelection: true
  
];

data=[
  {
    name:'surendra',
    email:'surendrapatil117@gmail.com',
    mobno:'0987656545'
  },
  {
    name:'sdgvdfg',
    email:'dsfgvdfvdf117@gmail.com',
    mobno:'3464556545'
  }

];




//rowData = new Observable<any[]>();
rowData:any;

 




  constructor(private formbulder:FormBuilder,private Api:ApiService,private modalService: NgbModal) { }

  ngOnInit(): void {

   this.empname="surendra";
  
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
   // this.employeeData=res;
   console.log(res);
   this.rowData=res;
   this.employeeData=res;
   //this.rowData.push(res);
   
   //this.rowData.api.setRowData(res);

    },err=>{
      alert('Somethinmg went wrong')
   
    })

  }

  deleteEmployee(row:any)
  {
    
   // this.oopen("confirmcontent",row);
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

  getSelectedRows(): void {
         const selectedNodes = this.agGrid.api.getSelectedNodes();
        
          const selectedData = selectedNodes.map(node => node.data);
          console.log(selectedData);
          const selectedDataStringPresentation = selectedData.map(node => `${node.firstName} ${node.email}`).join(', ');
    
          alert(`Selected nodes: ${selectedDataStringPresentation}`);


         

      }

      onGridReady(params)
      {
        console.log('onGridReady');
        console.log(params);
        this.agGrid=params.api;
        this.gridColumnApi=params.columnApi;

      

      }

      oopen(content,row) { 
        console.log('inside oopen'+content);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {  
          this.closeResult = `Closed with: ${result}`;  
          if (result === 'yes') {  
            this.Api.deleteemployee(row.id).subscribe(res=>{
            
              this.getAllEmploayee();
            })
          
           
          }  
        }, (reason) => {  
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
          console.log(reason);
        });  
      } 

      deleteHero(id)
      {
        console.log('deleteHero')

      }
      getDismissReason(resion)
      {
        console.log('getDismissReason')
      }
      
      // private getDismissReason(reason: any): string {  
      //   if (reason === ModalDismissReasons.ESC) {  
      //     return 'by pressing ESC';  
      //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {  
      //     return 'by clicking on a backdrop';  
      //   } else {  
      //     return `with: ${reason}`;  
      //   }  
      // }  

     
}
