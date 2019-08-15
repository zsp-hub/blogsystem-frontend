import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-blog-comment',
  templateUrl: './user-blog-comment.component.html',
  styleUrls: ['./user-blog-comment.component.css']
})
export class UserBlogCommentComponent implements OnInit {
  @Input() articleId: number;
  private visitorName: string;
  private email: string;
  private content: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getCommentList();
  }

  //获取评论
  getCommentList() {
    this.userService.getCommentList(this.articleId).subscribe((response: any) => {
      console.log(response);
    });
  }

  //添加评论
  postComment() {
    this.userService.postComment(this.articleId,this.visitorName,this.email,this.content).subscribe((response: any)=>{
      console.log(response);
    });
  }
}
