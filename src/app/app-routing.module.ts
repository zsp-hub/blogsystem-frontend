import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from "./user/user/user.component";
import {ManageComponent} from "./manage/manage/manage.component";
import {UserBlogListComponent} from "./user/user-blog-list/user-blog-list.component";
import {UserBlogContentComponent} from "./user/user-blog-content/user-blog-content.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {ManageBlogComponent} from "./manage/manage-blog/manage-blog.component";
import {ManageCommentComponent} from "./manage/manage-comment/manage-comment.component";
import {ManageAddBlogComponent} from "./manage/manage-add-blog/manage-add-blog.component";
import {UserHomeComponent} from "./user/user-home/user-home.component";
import {ManagePutBlogComponent} from "./manage/manage-put-blog/manage-put-blog.component";


const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      {path: 'home', component: UserHomeComponent},
      {path: 'blog-list', component: UserBlogListComponent},
      {path: 'blog-content/:articleId', component: UserBlogContentComponent},
      {path: 'login', component: UserLoginComponent},
      {path: '**', redirectTo: 'home'}
    ]
  },
  {
    path: 'manage', component: ManageComponent,
    children: [
      {path: 'blog', component: ManageBlogComponent},
      {path: 'add-blog', component: ManageAddBlogComponent},
      {path: 'comment', component: ManageCommentComponent},
      {path: 'put-blog/:articleId', component: ManagePutBlogComponent},
      {path: '**', redirectTo: 'blog'}
    ]
  },
  {path: '**', redirectTo: 'user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
