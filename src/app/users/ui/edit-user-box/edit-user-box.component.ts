import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-edit-user-box',
  templateUrl: './edit-user-box.component.html',
  styleUrls: ['./edit-user-box.component.scss']
})
export class EditUserBoxComponent implements OnInit {
  @Input() userAvatar: string;
  @Input() username: string;
  @Input() userId;

  msg: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    const username = form.value.name;
    const jobTitle = form.value.jobTitle;
    this.usersService.editUser(username, jobTitle, this.userId).subscribe((response) => {
      console.log('Edit Success');
      this.msg = 'Success';
    }, (errorMsg: string) => {
      this.msg = errorMsg;
      console.log(this.msg);
    });
  }
}
