import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  ngOnInit() {}
  func() {
    if (this.userName === 'Ishvinder' && this.password === 'ishu') {
      this.router.navigate(['welcome', this.userName]);
    } else {
      this.isCorrect = true;
    }

    console.warn(this.userName);
  }
}
