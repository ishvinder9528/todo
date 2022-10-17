import { HttpClient } from '@angular/common/http';
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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-World-pathVariable/${name}`);
  }
}
