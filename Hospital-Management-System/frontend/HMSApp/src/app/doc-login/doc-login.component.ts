import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css']
})
export class DocLoginComponent {

  username:string="";
  password:string="";

  inValidLogic=false;

  constructor(private router:Router, private docauth:DocauthService){}

  

  checkLogin(){

    if(this.username && this.password){

      
      this.router.navigate(['docdash'])
      return true;
      this.inValidLogic=false;
    }

    else{
      this.inValidLogic=true;
      alert("wrong credintials")
      this.router.navigate(['homepage'])
      return false;

    }
  }

}


