import { Component, OnInit,Input } from '@angular/core';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {CategoryComponent} from "./category/category.component";
import {UserLoginService} from "../user-login.service";

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  value=0;
  blogs:Object[];
  favourites:Object[];
  category:String;
  //userDetail:Object;
  userLogin:String;
  blogToUpdate:Object;
  constructor(private users:UserLoginService) { }
  ngOnInit() {
    this.users.loadBlogData()
      .subscribe((data)=> {
        this.blogs = data;
        // this.users.loadData(this.users.userLogin)
        //   .subscribe((data) => {
        //     this.userDetail = data;
        //     console.log(this.userDetail);
        //   })
        //this.userLogin = this.users.userLogin;
      })

  }
  setComponent(val){
    this.value = val;
    console.log(val);
  }
  setCategory(val){
    this.value=val;
    switch(val){
      case 3:
        this.category="Entertainment";
        break;
      case 4:
        this.category="Sports";
        break;
      case 5:
        this.category="Education";
        break;
      case 6:
        this.category="Technology";
        break;
    }
  }
  updateBlog(blog){
    this.blogToUpdate = blog;
    this.value=2;
  }

}
