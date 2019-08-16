import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-blog-comment',
  templateUrl: './user-blog-comment.component.html',
  styleUrls: ['./user-blog-comment.component.css']
})
export class UserBlogCommentComponent implements OnInit {
  @Input() articleId: number;

  private comment:any=[];

  private content: string = '';
  private visitorName: string = '';
  private email:string = '';

  private flog:string='这篇博客还没有评论';



  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getCommentList();
  }

  //获取评论
  getCommentList() {
    this.userService.getCommentList(this.articleId).subscribe((response: any) => {
     this.comment=response['data'];
     if (this.comment['length'] != 0){
       this.flog='';
     }
    });
  }


  //添加评论
  postComment() {
    this.userService.postComment(this.articleId,this.visitorName,this.email,this.content).subscribe((response: any)=>{
      if(response['code']==200){
        this.visitorName = '';
        this.email = '';
        this.content = '';
        alert(response["message"]);
        this.getCommentList();
      }else {
        this.email = '邮箱不正确';
      }
    });
  }
}
