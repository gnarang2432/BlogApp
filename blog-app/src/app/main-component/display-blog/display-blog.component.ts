import {Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import {UserLoginService} from "../../user-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {
  @Input('blogs')blogs:Object[];
  //@Input('userLogin')userLogin:String;
  @Input('value')value:number;
  @Input('category')category:string;
  @Output () notify:EventEmitter<number> = new EventEmitter<number>();
  user:Object;
  id:Number;
  author:String;
  userLogin:String;
  blog:Object;
  constructor(private users:UserLoginService,private route:Router) {
    console.log(this.user);
    console.log(this.value);
  }

  ngOnInit() {
    this.userLogin = this.users.userLogin;
    this.users.loadData(this.userLogin).subscribe(res=>{
      this.user = res;
      this.blogs.forEach(blog=>{
        (this.user['favourites'].indexOf(blog['id'])!==-1)?blog['fav']=false:blog['fav'] = true;
      })
    })
  }
  deleteBlog(id,i){
    this.users.deleteBlog(id)
      .subscribe(data=>{
        this.blogs.splice(i,1);
      })
  }

  addToFavourite(id,btn){
    if(btn.innerText == "Add to Favourites"){
      btn.innerText = "Remove from Favourite";
      this.user["favourites"].push(id);
      this.users.postFavouriteData(this.user)
             .subscribe(data => {
               //this.blogs=data;
               //console.log(data);
            })
    }
    else{
      btn.innerText = "Add to Favourites";
          var i = this.user["favourites"].indexOf(id);
          this.user["favourites"].splice(i,1);
          this.users.postFavouriteData(this.user)
            .subscribe(data => {
            })

    }

  }
  updateBlog(blog){
    this.notify.emit(blog);
  }

}
