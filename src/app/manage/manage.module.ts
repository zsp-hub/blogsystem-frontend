import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { ManageSidebarComponent } from './manage-sidebar/manage-sidebar.component';
import { ManageAddBlogComponent } from './manage-add-blog/manage-add-blog.component';
import { ManageCommentComponent } from './manage-comment/manage-comment.component';
import { ManageBlogComponent } from './manage-blog/manage-blog.component';



@NgModule({
  declarations: [ ManageComponent, ManageSidebarComponent, ManageAddBlogComponent, ManageCommentComponent, ManageBlogComponent],
  imports: [
    CommonModule
  ],
  exports: [ManageComponent]
})
export class ManageModule { }
