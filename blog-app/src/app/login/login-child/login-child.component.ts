import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {UserLoginService} from "../../user-login.service";


@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent implements OnInit {

  //@Input('user') user:object[];
  name: String;
  pwd: String;
  userDetail: Object;
  flag = true;

  //@Output () notify:EventEmitter<string> = new EventEmitter<string>();
  constructor(private route: Router, private users: UserLoginService) {
  }

  ngOnInit() {
  }

  checkUser(name, pwd) {
    this.users.loadData(name)
      .subscribe((data) => {
          this.userDetail = data;
          if (this.userDetail['password'] == pwd) {
            this.route.navigate(["/blog"]);
            this.users.receiveData(name);
          }
          else {
            this.flag = false;
          }

        }, () => {
          this.flag = false;
        }, () => {
        }
      )
  }
}

    // console.log(name);
    //   for(var i=0;i<this.user.length;i++){
    //     if(this.user[i]['username'] == name){
    //       if(this.user[i]['password']== pwd){
    //         this.route.navigate(["/blog"]);
    //       }
    //     }
    //    // console.log(this.user[i]['username']);
    //   }



