import {Component, OnInit} from '@angular/core';
import {ManageService} from "../services/manage.service";
import {UserService} from "../../user/services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-manage-put-blog',
  templateUrl: './manage-put-blog.component.html',
  styleUrls: ['./manage-put-blog.component.css']
})
export class ManagePutBlogComponent implements OnInit {

  private articleId: number;

  private headline: string = '';
  private synopsis: string = '';
  private content: string = '';
  private pictureAddress: string = '';

  constructor(private manageService: ManageService,
              private userService: UserService,
              private routerIonfo: ActivatedRoute) {

  }

  ngOnInit() {
    this.articleId = this.routerIonfo.snapshot.params['articleId'];
    this.getArticle();
  }

  //获取文章内容
  getArticle() {
    this.userService.getArticle(this.articleId).subscribe((response: any) => {
      this.headline = response['data']['headline'];
      this.synopsis = response['data']['synopsis'];
      this.content = response['data']['content'];
      this.pictureAddress = response['data']['pictureAddress'];
    });
  }

  //更新文章
  putArticle() {
    this.manageService.putArticle(this.articleId, this.headline, this.synopsis, this.content, this.pictureAddress).subscribe((response: any) => {
      alert(response['message']);
    })
  }

}
