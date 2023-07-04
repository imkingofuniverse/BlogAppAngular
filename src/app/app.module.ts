import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/signin/login.component';
import { RegisterComponent } from './components/singup/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { ErrorComponent } from './components/error/error.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { GetCommentComponent } from './components/get-comment/get-comment.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    LogoutComponent,
    ProfileComponent,
    EditComponent,
    AdminComponent,
    ErrorComponent,
    HomePageComponent,
    ContactUsComponent,
    AboutUsComponent,
    PostListComponent,
    CreatePostComponent,
    CreateCommentComponent,
    GetCommentComponent,
    UpdateCommentComponent,
    UpdatePostComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
