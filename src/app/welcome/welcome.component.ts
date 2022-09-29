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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service:WelcomeDataService) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
  func() {
    this.router.navigate(['login']);
  }
  getWelcomeData() {
    this.service.execetuHelloWorldBean();
    // console.log('WelcomeComponent');
  }
}
