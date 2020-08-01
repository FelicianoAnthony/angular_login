import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  log_email: string;
  log_password: string;
  reg_email: string;
  reg_password: string;
  reg_confirm: string;
  reg_confirm_password: string;

  
  constructor() {}


  ngOnInit() {


  }
  
  register() {

  }

  login() {

  }
  title = 'poker-login';
}
