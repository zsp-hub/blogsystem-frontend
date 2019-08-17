import {Component, OnInit} from '@angular/core';
import {ManageService} from "../services/manage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.css']
})
export class ManageBlogComponent implements OnInit {

  private pageNum: number = 1;
  private pageEnd: number;
  private list: any = [];
  private pageList: any = [];

  constructor(private manageService: ManageService, private router: Router) {
  }

  ngOnInit() {
    this.getArticleListManage();
  }

  //获取文章列表
  getArticleListManage() {
    this.manageService.getArticleListManage(this.pageNum).subscribe((response: any) => {
      console.log(response);
      this.list = response['data']['list'];
      this.pageList = response['data']['navigatepageNums'];
      this.pageEnd = response['data']['navigateLastPage'];
      console.log(this.list);
      console.log(this.pageList);
    });
  }

  //删除文章
  deleteArticle(articleId: number) {
    this.manageService.deleteArticle(articleId).subscribe((response: any) => {
      alert(response['message'])
      this.getArticleListManage();
    });
  }

  //切换到修改页
  put(articleId: number) {
    this.router.navigate(['/manage/put-blog', articleId]);
  }

  //根据页码跳转
  skip(page: number) {
    this.pageNum = page;
    this.getArticleListManage();
  }

  //上一页
  prev() {
    if (this.pageNum != 1) {
      this.pageNum = this.pageNum - 1;
      this.getArticleListManage();
    }
  }

  //下一页
  next() {
    if (this.pageNum != this.pageEnd) {
      this.pageNum = this.pageNum + 1;
      this.getArticleListManage();
    }
  }
}
