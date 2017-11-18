import {Component, OnInit, EventEmitter, Output, Input,OnChanges} from '@angular/core';
import {debug} from "util";
import {UserLoginService} from "../../user-login.service";
import DateTimeFormat = Intl.DateTimeFormat;
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blogs:Object[];
  constructor(private users:UserLoginService,private route:Router) { }
  title:String;
  category:String;
  description:String;
  date:DateTimeFormat;
  author:String;
  @Input('blogToUpdate')blogToUpdate:Object;
  ngOnInit() {
  }
  ngOnChanges(){
    if(this.blogToUpdate){
      this.title = this.blogToUpdate['title'];
      this.category = this.blogToUpdate['category'];
      this.description = this.blogToUpdate['description'];
    }

  }
  postBlog(title,description,category){
    //console.log(title,description,category);
      let blog ={
        title:title,
        category:category,
        description:description,
        author:this.users.userLogin,
       // date:new Date()
      }
      if(this.blogToUpdate){
        blog['id'] = this.blogToUpdate['id'];
        blog['date'] = this.blogToUpdate['date'];
      }
      else{
        blog['date'] = new Date();
      }
    //console.log(title);
    this.users.postData(blog)
      .subscribe(data => {
        this.blogs=data;
        if(this.blogs){
          this.route.navigate(["/message"]);
        }
        console.log(data);
      })
  }

}
