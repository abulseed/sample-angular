import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users-list-header',
  templateUrl: './users-list-header.component.html',
  styleUrls: ['./users-list-header.component.scss']
})
export class UsersListHeaderComponent implements OnInit {

  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
