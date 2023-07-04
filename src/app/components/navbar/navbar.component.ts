import { Component } from '@angular/core';
import { UserResponseDto } from 'src/app/entities/user-response-dto';
import { AdminService } from 'src/app/service/admin.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  profileDetails: UserResponseDto;

  constructor(public authenticate: AuthenticationService, public adminService:AdminService) { }
  
  }

