import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-add-user-box',
  templateUrl: './add-user-box.component.html',
  styleUrls: ['./add-user-box.component.scss']
})
export class AddUserBoxComponent implements OnInit {
  msg: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const username = form.value.name;
    const jobTitle = form.value.jobTitle;
    this.usersService.addUser(username, jobTitle).subscribe((response) => {
      console.log('Add Success');
      this.msg = 'Success';
    }, (errorMsg: string) => {
      this.msg = errorMsg;
      console.log(this.msg);
    });
  }
}
