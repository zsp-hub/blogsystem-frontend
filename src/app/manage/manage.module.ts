import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { ManageSidebarComponent } from './manage-sidebar/manage-sidebar.component';
import { ManageAddBlogComponent } from './manage-add-blog/manage-add-blog.component';
import { ManageCommentComponent } from './manage-comment/manage-comment.component';
import { ManageBlogComponent } from './manage-blog/manage-blog.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";
import {ManageService} from "./services/manage.service";



@NgModule({
  declarations: [ ManageComponent, ManageSidebarComponent, ManageAddBlogComponent, ManageCommentComponent, ManageBlogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [ManageComponent],
  providers: [ManageService]
})
export class ManageModule { }
