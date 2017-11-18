import 'rxjs/add/operator/map'
import {Injectable, Input} from '@angular/core';
import {Http,Headers} from "@angular/http";


const BASE_URL = 'http://localhost:3000/users/';
const BLOG_URL = 'http://localhost:3000/blog'
const header = {headers:new Headers({'Content-type':'application/json'})}

@Injectable()
export class UserLoginService {
  //userLogin:String;
  @Input('userLogin') userLogin:String;
  constructor(private http:Http) { }
  receiveData(userName){
    this.userLogin = userName;
    console.log(this.userLogin);
  }
  loadData(id){
     return this.http.get(BASE_URL+id)
      .map(res => res.json())
     // this.http.get(BASE_URL+id)
     //   .map(res => {
     //     if(res.status<200 || res.status>=300){
     //       return "Invalid";
     //   }
     //   else{
     //       return res.json();
     //     }
     //   })

  }
  postData(data){
    if(data.id){
      return this.http.put(BLOG_URL+"/"+data.id,data,header)
        .map(res => res.json())
    }
    else{
      return this.http.post(BLOG_URL,data,header)
        .map(res => res.json())
    }

  }
  deleteBlog(id){
    return this.http.delete(BLOG_URL+"/"+id)
      .map(res=>res.json())
  }
  loadBlogData(){
    return this.http.get(BLOG_URL)
      .map(res => res.json())
  }
  postFavouriteData(userDetail){
    return this.http.put(BASE_URL+userDetail.id,userDetail,header)
      .map(res => res.json())
  }

}
