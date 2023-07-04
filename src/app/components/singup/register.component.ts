import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIsService } from 'src/app/service/data/apis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = {
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  error: any;
  roleIsAdmin: any;

  constructor(private signup: APIsService, private router: Router) {}
  register() {
    this.signup.register(this.registerForm).subscribe(
      (response) => {
        // Handle successful registration
        console.log('Registration successful!', response);
        this.router.navigate(['/signin']);
      },
      (error) => {
        // Handle registration error
        console.error('Registration error:', error.error);
        this.error = error;
        if (error.error.message != null) {
          alert(error.error.message);
        }
      }
    );
  }
}
