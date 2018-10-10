import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  @Input() avatarSrc: string;
  @Input() altText: string;
  @Input() width: string;
  @Input() height: string;

  constructor() { }

  ngOnInit() {
  }

}
