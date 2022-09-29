import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName = 'Ishvinder';
  password = '';
  errorMessage = 'Invalid username or password';
  isCorrect: boolean = false;
  constructor(private router: Router, private hardcodedAuthenticationService:HardcodedAuthenticationService) {}

  ngOnInit() {}
  func() {
    if (this.hardcodedAuthenticationService.authenticater(this.userName, this.password)) {
      this.router.navigate(['welcome', this.userName]);
    } else {
      this.isCorrect = true;
    }

    console.warn(this.userName);
  }
}
