import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from "../../AppSettings";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  //获取用户看的文章列表
  getArticleListUser(pageNum: number) {
    let api: string = AppSettings.API_ENDPOINT + 'get/article-list-user';
    return this.http.post(api, {'pageNum': pageNum});
  }

  //登录
  login(account: string, password: string) {
    let api: string = AppSettings.API_ENDPOINT + 'manage/login';
    return this.http.post(api, {'account': account, 'password': password}, {withCredentials: true});
  }

  //获取文章内容
  getArticle(articleId: number) {
    let api: string = AppSettings.API_ENDPOINT + 'get/article';
    return this.http.post(api, {'articleId': articleId});
  }

  //获取文章评论
  getCommentList(articleId: number) {
    let api: string = AppSettings.API_ENDPOINT + 'get/comment-list';
    return this.http.post(api, {'articleId': articleId});
  }

  //新增评论
  postComment(articleId: number, visitorName: string, email: string, content: string) {
    let api: string = AppSettings.API_ENDPOINT + 'post/comment';
    return this.http.post(api, {
      'articleId': articleId,
      'visitorName': visitorName,
      'email': email,
      'content': content
    });
  }

  //增加阅读量
  putReadingQuantity(articleId:number){
    let api: string = AppSettings.API_ENDPOINT + 'put/reading-quantity';
    return this.http.post(api,{"articleId":articleId});
  }
}
