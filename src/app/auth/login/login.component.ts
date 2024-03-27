import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  backgroundImage: string = 'assets/images/paris.jpeg';
  logo: string = 'assets/logos/logo-innotech.png';

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  auth() {
    const data = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    console.log(data);
    this._authService.authenticate(data).subscribe({
      next: (resp) => {
        console.log(resp);
        this._authService.isAuthenticatedUser(true)
        this._router.navigate(['home']);
      },
      error: (err) => {
        this._authService.isAuthenticatedUser(false)
        console.log(err);
      },
    });
  }
}
