import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponseDto } from 'src/app/entities/user-response-dto';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { APIsService } from 'src/app/service/data/apis.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileDetails: UserResponseDto=new UserResponseDto(0,'','','','');
  userEmail: string | null;
  selectedImage: string | null;

  constructor(private apiService: APIsService, private authenticate: AuthenticationService,private router:Router) {
  }
  ngOnInit() {
    this.userEmail = localStorage.getItem('user');
    this.apiService.getUserByEmail(this.userEmail).subscribe((response) => {
      console.log(response);
      this.profileDetails = response;
    });
  }

  updateProfile(id:any){
    console.log(`Updating Id ${id}`);
    this.router.navigate(['edit',id]);
  }


  
  openImageUploader() {
    // this.imageInput.nativeElement.click();
  }

  // Handle image upload
  handleImageUpload(event: any) {
    // Code for handling the image upload as mentioned before
  }

  // Update the image
  updateImage() {
    // Logic to send the selected image to the server and update the user's profile image
    // You can use Angular's HttpClient to make a PUT request to the server with the selected image data
    // After a successful response from the server, you can update the profile image in the component
  }
}
