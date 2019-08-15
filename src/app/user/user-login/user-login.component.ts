import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private message: string = '';

  private account: string;
  private password: string;

  constructor(private user: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  //登录请求
  login() {
    this.user.login(this.account, this.password).subscribe((response: any) => {
      this.message = response['message'];
      if (response['code'] == 200) {
        localStorage.setItem("login","200");
        this.goManage();
      }
    });
  }

  goManage() {
    setTimeout(() => {
      this.router.navigate(['/manage']);
    }, 1500);
  }
}
