import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminLogin:any=false;

  constructor() { }
    isUserAdmin() {
    this.adminLogin = localStorage.getItem('admin');
    return !(this.adminLogin === null);
  }
}
