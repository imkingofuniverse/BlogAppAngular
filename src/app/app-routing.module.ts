import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/signin/login.component';
import { RegisterComponent } from './components/singup/register.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { ErrorComponent } from './components/error/error.component';
import { RouteGuardService } from './service/route-guard.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { GetCommentComponent } from './components/get-comment/get-comment.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  {path:'',component: HomePageComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: HomePageComponent},
  {path:'postlist', component:PostListComponent, canActivate: [RouteGuardService]},
  {path:'createpost', component:CreatePostComponent, canActivate: [RouteGuardService]},
  {path:'createcomment/:id', component:CreateCommentComponent, canActivate: [RouteGuardService]},
  {path:'viewcomment/:id', component:GetCommentComponent, canActivate: [RouteGuardService]},
  { path: 'updatecomment/:id1/:id2', component: UpdateCommentComponent },
  { path: 'updatepost/:id', component: UpdatePostComponent },
  {path:'about', component: AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [RouteGuardService] },
  { path: 'edit/:id', component: EditComponent, canActivate: [RouteGuardService] },
  { path: 'admin', component: AdminComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }
  // { path: '', component: AppComponent } // Add this line to map root URL to AppComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
