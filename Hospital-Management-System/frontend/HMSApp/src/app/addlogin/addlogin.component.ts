import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlogin',
  templateUrl: './addlogin.component.html',
  styleUrls: ['./addlogin.component.css']
})
export class AddloginComponent {

  username:string="";
  password:string="";

  isValidLogin=false;

  constructor(private adminService:AdminauthService, private router:Router){}

  checkLogin(){

    if(this.adminService.authenticate(this.username,this.password)){
      this.router.navigate(['admin'])
      this.isValidLogin=false;
    }
    else{
      this.isValidLogin=true;
      alert("wrog credinational")
      this.router.navigate(['homepage'])
     
    }


  }

}
