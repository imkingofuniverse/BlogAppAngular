import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { APIsService } from 'src/app/service/data/apis.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = {
    username: '',
    password: ''
  };
  AdminLogin = {

    adminName: "admin@gmail.com",

    adminPassword: 'abc123'

  }
  error: any;
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  constructor(private signinService: APIsService,
     private router: Router,
     public authenticate: AuthenticationService,
     private adminService: AdminService) { }

  login() {
  //   if (this.loginForm.username == this.AdminLogin.adminName && this.loginForm.password == this.AdminLogin.adminPassword) {

  //     console.log(this.loginForm.username);

  //     sessionStorage.setItem('token','ADMIN');

  //     this.adminService.adminLogin = true;

  //     localStorage.setItem("admin", JSON.stringify(this.adminService.adminLogin));

  //     console.log(this.adminService.adminLogin);

  //     this.router.navigate(['/home']);

  //   } else {
      this.signinService.login(this.loginForm).subscribe(
        (response: any) => {
          console.log(response.role[0]);
          localStorage.setItem('user', this.loginForm.username);
          // Handle successful login
          if(response.role[0]==="ROLE_ADMIN"){
              this.adminService.adminLogin = true;
          localStorage.setItem("admin", JSON.stringify(this.adminService.adminLogin));}
          // Store the JWT token in local storage or a cookie
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/home']);

          // Use Angular's Router module for navigation
        },
        (error) => {
          // Handle login error
          console.error('Login error:', error);
          this.invalidLogin = true;
          this.error = error;
        }
      );
    
  }
}
