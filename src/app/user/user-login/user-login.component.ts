import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public message: string = '';

  public account: string;
  public password: string;

  constructor(private user: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.user.login(this.account, this.password).subscribe((response:any)=>{
      this.message = response['message'];
    });
  }
}
