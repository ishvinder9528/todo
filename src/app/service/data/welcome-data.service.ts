import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  execetuHelloWorldBean(){
    console.log(this.http.get('http://localhost:8080/hello-World-Bean'))
    this.http.get('http://localhost:8080/hello-World-Bean').subscribe();
    // console.log('execetuHelloWorldBean');
  }
  
}