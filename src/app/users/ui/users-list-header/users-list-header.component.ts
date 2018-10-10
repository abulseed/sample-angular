import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-list-header',
  templateUrl: './users-list-header.component.html',
  styleUrls: ['./users-list-header.component.scss']
})
export class UsersListHeaderComponent implements OnInit {
  faPlus = faPlus;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
}
