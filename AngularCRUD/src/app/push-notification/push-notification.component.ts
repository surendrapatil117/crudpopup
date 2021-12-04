import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import{PushnotificationService} from '../shared/pushnotification.service'

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent implements OnInit {
  public title: string = 'Browser Push Notifications!';
  constructor(private _notificationService:PushnotificationService) {
    this._notificationService.requestPermission();
   }

  ngOnInit(): void {
    this.notify();
  }
  notify() {
    let data: Array < any >= [];
    data.push({
        'title': 'Seesion will expire Soon',
        'alertContent': 'Action required ,your session will timeout shortly..'
    });
    data.push({
        'title': 'Seesion will expire Soon',
        'alertContent': 'Session is being timeout,click on Continue/Logout'
    });
    // data.push({
    //     'title': 'Leave Application',
    //     'alertContent': 'This is Third Alert -- By Debasis Saha'
    // });
    // data.push({
    //     'title': 'Approval',
    //     'alertContent': 'This is Fourth Alert -- By Debasis Saha'
    // });
    // data.push({
    //     'title': 'To Do Task',
    //     'alertContent': 'This is Fifth Alert -- By Debasis Saha'
    // });

    //this._notificationService.generateNotification(data);
}

}
