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
  logout(){
    let api: string = AppSettings.API_ENDPOINT + 'manage/logout';
    return this.http.post(api,{},{withCredentials:true});
  }


}
