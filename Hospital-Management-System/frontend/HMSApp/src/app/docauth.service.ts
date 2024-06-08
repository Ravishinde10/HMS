import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }


  authenticate(username:string, passward:string){

       if(username=="ravi" && passward=="ravi1234"){

        sessionStorage.setItem('username', username)

        return true;
       }else{

        return false;



       }


  }

 
}
