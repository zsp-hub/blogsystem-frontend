import {Component, OnInit} from '@angular/core';
import {ManageService} from "../services/manage.service";

@Component({
  selector: 'app-manage-comment',
  templateUrl: './manage-comment.component.html',
  styleUrls: ['./manage-comment.component.css']
})
export class ManageCommentComponent implements OnInit {
  private headlineList: any;

  private headline: string;

  private articleId: number;
  private pageNum: number = 1;
  private pageEnd: number;
  private list: any = [];
  private pageList: any = [];

  constructor(private manageService: ManageService) {
  }

  ngOnInit() {
    this.getArticleList();
  }

  //获取标题
  getArticleList() {
    this.manageService.getArticleList().subscribe((response: any) => {
      console.log(response);
      this.headlineList = response['data'];
      if (this.headlineList != null) {
        this.articleId = this.headlineList[0].articleId;
        this.headline = this.headlineList[0].headline;
        this.getComment();
      }
    });
  }

  //切换标题
  getChange(articleId: number) {
    this.articleId = articleId;
    this.getComment();
  }

  //获取评论
  getComment() {
    this.manageService.getComment(this.articleId, this.pageNum).subscribe((response: any) => {
      console.log(response);
      this.list = response['data']['list'];
      this.pageList = response['data']['navigatepageNums'];
      this.pageEnd = response['data']['navigateLastPage'];
    });
  }

  //删除评论
  deleteComment(commentId: number) {
    this.manageService.deleteComment(commentId).subscribe((response: any) => {
      alert(response['message']);
      this.getComment();
    })
  }

  //根据页码跳转
  skip(page: number) {
    this.pageNum = page;
    this.getComment();
  }

  //上一页
  prev() {
    if (this.pageNum != 1) {
      this.pageNum = this.pageNum - 1;
      this.getComment();
    }
  }

  //下一页
  next() {
    if (this.pageNum != this.pageEnd) {
      this.pageNum = this.pageNum + 1;
      this.getComment();
    }
  }

}
