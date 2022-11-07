import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-World-Bean');
  
  }
 
  executeHelloWorldPathVariableService(name: string) {
    let basicAuthenticationString = this.createBasicAuthenticationHttpHeader();
    let headers =  new HttpHeaders({
      Authentication : basicAuthenticationString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-World-pathVariable/${name}`,{
      headers: headers
    });
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'ishvinder'
    let password = 'ishu'
    let header = "Basic " + window.btoa(username + ":" + password)

    return header
  }
}
