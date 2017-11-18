import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginChildComponent } from './login/login-child/login-child.component';
import { MainComponentComponent } from './main-component/main-component.component';
import {NavBarComponent} from "./main-component/nav-bar/nav-bar.component";
import { CategoryComponent } from './main-component/category/category.component';
import {RouterModule} from "@angular/router";
import { CreateBlogComponent } from './main-component/create-blog/create-blog.component';
import {UserLoginService} from "./user-login.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { DisplayBlogComponent } from './main-component/display-blog/display-blog.component';
import { MessageComponent } from './main-component/message/message.component';
import {AuthGuard} from "./auth.guard";

const  approutes = [
  {path:"login",component:LoginComponent},
  {path:"blog",canActivate:[AuthGuard],component:MainComponentComponent},
  {path:"message",component:MessageComponent},
  {path:"",component:LoginComponent},
  {path:"**",component:LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginChildComponent,
    NavBarComponent,
    MainComponentComponent,
    CategoryComponent,
    CreateBlogComponent,
    DisplayBlogComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [UserLoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
