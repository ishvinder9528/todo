import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage= 'Some Error Occured. Please Connntact our support ***-*** '
  constructor() { }

  ngOnInit(): void {
  }

}
