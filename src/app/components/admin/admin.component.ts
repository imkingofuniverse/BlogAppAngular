import { Component } from '@angular/core';

import { UserResponseDto } from 'src/app/entities/user-response-dto';

import { APIsService } from 'src/app/service/data/apis.service';

@Component({
  selector: 'app-admin',

  templateUrl: './admin.component.html',

  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  allUsers: UserResponseDto[] = [];

  message: string;

  searchEmail: string;

  searchedUser: UserResponseDto[] = [];

  visible: boolean = true;

  constructor(private apiService: APIsService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.apiService.getAllUsers().subscribe((data) => {
      this.allUsers = data;

      console.log(data);
    });
  }

  delete(id: any) {
    this.apiService
      .deleteUser(id, sessionStorage.getItem('token'))
      .subscribe((data) => {
        this.message = data;
        console.log('hi');
        this.refreshData();
      }, (error) => {
        console.log(error);
        console.log("inside admin error" + id);
      }
      );
  }

  search() {
    this.searchedUser = [];

    this.apiService.getUserByEmail(this.searchEmail).subscribe(
      (data) => {
        this.searchedUser.push(data);

        if (this.searchedUser.length != 0) {
          this.visible = false;
        }
      },
      (error) => {
        console.log(error);
        if (error != null) 
        alert(error.error.message);
      }
    );
  }
}
