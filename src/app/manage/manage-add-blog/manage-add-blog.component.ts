import {Component, OnInit} from '@angular/core';
import {ManageService} from "../services/manage.service";
import {AppSettings} from "../../AppSettings";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-add-blog',
  templateUrl: './manage-add-blog.component.html',
  styleUrls: ['./manage-add-blog.component.css']
})
export class ManageAddBlogComponent implements OnInit {

  private headline: string;
  private synopsis: string;
  private content: string;

  private pictureAddress: string;


  constructor(private manageService: ManageService,
              private router: Router) {

  }

  ngOnInit() {
  }


  //获取图片并转换为formData类型
  postPicture(event) {
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.manageService.postPicture(formData).subscribe((response: any) => {
      alert(response['message']);
      if (response['code'] == 200) {
        this.pictureAddress = AppSettings.API_ENDPOINT + response['data'];
      }
      console.log(this.pictureAddress);
    });
  }

  //添加文章
  postArticle() {
    this.manageService.postArticle(this.headline, this.synopsis, this.content, this.pictureAddress).subscribe((response: any) => {
      alert(response['message']);
      if (response['code'] == 200) {
        setTimeout(() => {
          this.router.navigate(['/manage/blog']);
        }, 1000);
      }
    });
  }

}

