import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  hide = true;

  userName = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  ngOnInit() {
  }

  getErrorMessage() {
    return this.userName.hasError('required') ? 'You must enter a value' :
        this.userName.hasError('email') ? 'Not a valid email' :
            '';
  }
  authendicate() {
    if ( 'dinesh' === this.password.value) {
      this.router.navigate(['/dashboard']);
     }

  }

}
