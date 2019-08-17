import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-blog-content',
  templateUrl: './user-blog-content.component.html',
  styleUrls: ['./user-blog-content.component.css']
})
export class UserBlogContentComponent implements OnInit {

  private articleId: number;
  private article: any = [];

  constructor(private routerIonfo: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.articleId = this.routerIonfo.snapshot.params['articleId'];
    this.getArticle();
    this.putReadingQuantity();
  }

  //获取文章内容
  getArticle() {
    this.userService.getArticle(this.articleId).subscribe((response: any) => {
      this.article = response['data'];
      console.log(this.article);
    });
  }

  //增加阅读量
  putReadingQuantity() {
    this.userService.putReadingQuantity(this.articleId).subscribe();
  }

}
