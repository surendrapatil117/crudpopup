import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import  {} from'rxjs/add/operator/debounceTime';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-rxjstest',
  templateUrl: './rxjstest.component.html',
  styleUrls: ['./rxjstest.component.css']
})
export class RxjstestComponent implements OnInit {
  firstName        = 'Name';
  searchControl = new FormControl();
  formCtrlSub: Subscription;
  resizeSub:   Subscription;

  searchString:string;
  searchSubject$=new Subject<string>(); 
  Subjecttest$=new Subject(); 

  constructor() {
    this.Subjecttest$.subscribe(result=>{
      console.log('Subscribe before next'+result);
    })
    
   }
 
  ngOnInit(): void {
    this.searchSubject$.pipe(debounceTime(2000)).subscribe(x=>console.log('debounceTime:'+x));
    this.Subjecttest$.next(1);
    this.Subjecttest$.next(2);
    this.Subjecttest$.subscribe(result=>{
      console.log('Subscribe after next'+result);
    })
    this.Subjecttest$.next(3);
    
  }
  inputchanged($event)
  {
   // console.log($event);
    this.searchSubject$.next($event);

  }

}
