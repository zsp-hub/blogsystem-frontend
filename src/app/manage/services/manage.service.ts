import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppSettings} from "../../AppSettings";

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor(private http: HttpClient) {
  }

  //退出登录
  logout() {
    let api: string = AppSettings.API_ENDPOINT + 'manage/logout';
    return this.http.post(api, {}, {withCredentials: true});
  }

  //获取管理用的文章列表
  getArticleListManage(pageNum: number) {
    let api: string = AppSettings.API_ENDPOINT + 'manage/get/article-list-manage';
    return this.http.post(api, {"pageNum": pageNum}, {withCredentials: true});
  }

  //新增文章
  postArticle(headline: string, synopsis: string, content: string, pictureAddress: string) {
    let api: string = AppSettings.API_ENDPOINT + 'manage/post/article';
    return this.http.post(api, {
      "headline": headline,
      "synopsis": synopsis,
      "content": content,
      "pictureAddress": pictureAddress
    }, {withCredentials: true});
  }

  //获取文章内容
  getArticle(articleId: number) {
    let api: string = AppSettings.API_ENDPOINT + 'get/article';
    return this.http.post(api, {'articleId': articleId});
  }

  //修改文章
  putArticle(articleId: number, headline: string, synopsis: string, content: string, pictureAddress: string) {
    let api: string = AppSettings.API_ENDPOINT + 'manage/put/article';
    return this.http.post(api, {
      'articleId': articleId,
      "headline": headline,
      "synopsis": synopsis,
      "content": content,
      "pictureAddress": pictureAddress
    }, {withCredentials: true});
  }

  //删除文章
  deleteArticle(articleId: number) {
    let api: string = AppSettings.API_ENDPOINT + 'manage/delete/article';
    return this.http.post(api, {'articleId': articleId}, {withCredentials: true});
  }

  //获取标题列表
  getArticleList() {
    let api: string = AppSettings.API_ENDPOINT + 'manage/get/article-list';
    return this.http.post(api, {}, {withCredentials: true});
  }

  //获取管理员看的评论
  getComment(articleId: number, pageNum: number) {
    let api: string = AppSettings.API_ENDPOINT + 'manage/get/comment';
    return this.http.post(api, {'articleId': articleId, 'pageNum': pageNum}, {withCredentials: true});

  }

  //删除评论
  deleteComment(commentId: number) {
    let api: string = AppSettings.API_ENDPOINT + 'manage/delete/comment';
    return this.http.post(api, {'commentId': commentId}, {withCredentials: true});
  }


}
