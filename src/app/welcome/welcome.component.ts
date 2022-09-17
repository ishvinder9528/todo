import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name=''
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name'];
  }
  func(){
    this.router.navigate(['login']);
  }
  
}