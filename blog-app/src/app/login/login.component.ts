import { Component, OnInit } from '@angular/core';
import {LoginChildComponent} from "./login-child/login-child.component";
import {UserLoginService} from "../user-login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //user:Object[];
  constructor(private users:UserLoginService) { }

  ngOnInit() {

  }

}
