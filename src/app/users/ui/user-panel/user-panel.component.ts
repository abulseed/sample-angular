import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../../notification/notification.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  @Input() avatarSrc: string;
  @Input() username: string;
  @Input() userId;
  selected = false;

  constructor(private notificationService: NotificationService<String>) { }

  ngOnInit() {
    this.notificationService.notifier.subscribe((val) => {
      if (+this.userId !== +val) {
        this.selected = false;
      } else if (typeof val === 'boolean') {
        this.selected = false;
      }
    });
  }

  onSelect() {
    this.notificationService.notify(this.userId);
    this.selected = true;
  }
}
