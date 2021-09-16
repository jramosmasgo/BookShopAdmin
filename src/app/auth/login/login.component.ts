import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/shared/models/account/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router) { }

  userCredentials: Login = {} as Login;

  formLogin: FormGroup = this.formBuilder.group({
    email: ['jramos@gmail.com', [Validators.required, Validators.maxLength(50)]],
    password: ['Sistemas10!', [Validators.required, Validators.maxLength(50)]]
  });

  ngOnInit(): void {
  }

  login() {
    this.userCredentials = { ...this.formLogin.value };
    this.authService.login(this.userCredentials).subscribe(res => {
      console.log(res);
      if (res.data) {
        this.cookieService.set('token', res.data.jwToken);
        this.router.navigate(['/admin', 'categories']);
      }
    })
  }

}
