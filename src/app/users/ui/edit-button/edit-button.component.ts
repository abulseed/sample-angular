import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {
  @Input() userAvatar: string;
  @Input() username: string;
  @Input() userId;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
}
