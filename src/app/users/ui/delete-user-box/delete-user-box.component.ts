import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-delete-user-box',
  templateUrl: './delete-user-box.component.html',
  styleUrls: ['./delete-user-box.component.scss']
})
export class DeleteUserBoxComponent implements OnInit {
  @Input() username: string;
  @Input() userId: string;
  msg: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }


  deleteUser() {
    this.usersService.deleteUser(this.userId).subscribe((res) => {
      this.msg = 'Delete success';
    }, (error) => {
      this.msg = error;
    });
  }
}
