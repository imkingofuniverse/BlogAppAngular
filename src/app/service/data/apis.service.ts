import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponseDto } from 'src/app/entities/user-response-dto';

@Injectable({
  providedIn: 'root',
})
export class APIsService {
  obj: any;
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
  constructor(private http: HttpClient, private router: Router) { }
  register(userInput: any) {
    return this.http.post('http://localhost:9091/user/auth/signup', userInput);
  }

  registerAdminUser(userInput: any) {
    return this.http.post(
      'http://localhost:9091/user/auth/signup/admin',
      userInput
    );
  }
  login(UserInputForLogin: any) {
    return this.http.post(
      'http://localhost:9091/user/auth/login',
      UserInputForLogin
    );
  }
  getUserByEmail(username: any) {
    return this.http.get<UserResponseDto>(
      `http://localhost:9091/users/by-email/${username}`
    );
  }
  getUserById(id: any) {
    return this.http.get<UserResponseDto>(`http://localhost:9091/users/${id}`);
  }
  updateUserDetails(userResponse: any, id: any, token: any) {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    console.log('in side api service');
    return this.http.put<UserResponseDto>(
      `http://localhost:9091/users/${id}`,
      userResponse
      // ,{ headers }
    );
  }

  //harsh code
  getAllUsers() {
    return this.http.get<UserResponseDto[]>(`http://localhost:9091/users`);
  }

  deleteUser(id: any, token: any) {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    console.log('in side api service');
    return this.http.delete<string>(`http://localhost:9091/users/${id}`
      // , { headers }
    );
  }
}
