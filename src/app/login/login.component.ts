import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'Ishvinder';
  password = '';
  errorMessage = 'Invalid username or password';
  isCorrect: boolean = false;
  constructor(private router: Router, private hardcodedAuthenticationService:HardcodedAuthenticationService) {}

  ngOnInit() {}
  func() {
    if (this.hardcodedAuthenticationService.authenticater(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
    } else {
      this.isCorrect = true;
    }

    console.warn(this.username);
  }
}
