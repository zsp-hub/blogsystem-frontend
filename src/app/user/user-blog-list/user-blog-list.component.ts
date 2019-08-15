import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-blog-list',
  templateUrl: './user-blog-list.component.html',
  styleUrls: ['./user-blog-list.component.css']
})
export class UserBlogListComponent implements OnInit {
  private pageNum: number = 1;
  private pageEnd: number;
  private list: any = [];
  private pageList: any = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getArticleListUser();
  }

  //根据页码拿博客列表
  getArticleListUser() {
    this.userService.getArticleListUser(this.pageNum).subscribe((response: any) => {
      this.list = response['data']['list'];
      this.pageList = response['data']['navigatepageNums'];
      this.pageEnd = response['data']['navigateLastPage'];
    });
  }

  //根据页码跳转
  skip(page: number) {
    this.pageNum = page;
    this.getArticleListUser();
  }

  //上一页
  prev() {
    if (this.pageNum != 1) {
      this.pageNum = this.pageNum - 1;
      this.getArticleListUser();
    }
  }

  //下一页
  next() {
    if (this.pageNum != this.pageEnd) {
      this.pageNum = this.pageNum + 1;
      this.getArticleListUser();
    }
  }


}
