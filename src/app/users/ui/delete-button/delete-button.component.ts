import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {
  @Input() username: string;
  @Input() userId: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
}
