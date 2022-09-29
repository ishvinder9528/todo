import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticater(userName: string, password: string) {
    console.log(this.isUserAuthenticated())
    if (userName === 'Ishvinder' && password === 'ishu') {
      sessionStorage.setItem("userAuthenticate",userName);
      console.log(this.isUserAuthenticated())
      return true
    }
    return false
  }

  isUserAuthenticated(){
    let user = sessionStorage.getItem("userAuthenticate");
    if(user){
      return true;
    }
    return false;
  }
  logout(){
    sessionStorage.removeItem("userAuthenticate");
  }

}
