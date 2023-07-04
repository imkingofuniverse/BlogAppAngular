import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }
  //To check login status of user
  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    return !(user === null);
  }
  //Logging out user
  logOut() {
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
  }
}
