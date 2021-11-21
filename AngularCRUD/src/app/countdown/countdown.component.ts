import { Component, OnInit,VERSION, Output, EventEmitter } from '@angular/core';
import{ApiService} from '../shared/api.service'

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  name = "Angular " + VERSION.major;
  display: any;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  istokenvalid: boolean;

  constructor( private apiservice:ApiService) {
    this.timer(5);
   }

   timer(minute) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }

  ngOnInit(): void {
  }
  sendNotification() {
    this.notifyParent.emit('Some value to send to the parent');
}
hidenavbar()
{
  localStorage.removeItem('bearer-token');
  this.istokenvalid=this.apiservice.validatejwttoken();
  console.log(this.istokenvalid);
this.apiservice.content.next(this.istokenvalid);

}

}
