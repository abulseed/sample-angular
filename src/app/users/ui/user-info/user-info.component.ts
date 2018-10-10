import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../../notification/notification.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() avatarSrc: string;
  @Input() username: string;

  constructor(private notificationService: NotificationService<boolean>) { }

  ngOnInit() {
  }

  closeWindow() {
    this.notificationService.notify(true);
  }
}
