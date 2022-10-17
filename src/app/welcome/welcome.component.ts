import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromService=""
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service:WelcomeDataService) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
  func() {
    this.router.navigate(['login']);
  }
  getWelcomeData() {
    console.log(this.service.execetuHelloWorldBeanService());
    this.service.execetuHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log('WelcomeComponent');
  }
  
  handleSuccessfullResponse(response:any){
      console.log(response);
      console.log(response.message)
      this.welcomeMessageFromService=response.message;
  }
  handleErrorResponse(error:any){
      console.log(error.error.message);
      this.welcomeMessageFromService=error.error.message;
  }
}
