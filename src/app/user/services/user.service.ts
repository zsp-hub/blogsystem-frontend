import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from "../../AppSettings";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getArticleListUser(pageNum: number) {
    let api: string = AppSettings.API_ENDPOINT + 'get/article-list-user';
    return this.http.post(api, {'pageNum': pageNum});
  }

  login(account: string, password: string) {
    let api: string = AppSettings.API_ENDPOINT + 'manage/login';
    return this.http.post(api, {'account': account, 'password': password})
  }
}
