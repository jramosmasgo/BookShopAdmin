import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/shared/models/account/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  userRegister: UserRegister = {} as UserRegister;

  formRegister: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    user: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

}
