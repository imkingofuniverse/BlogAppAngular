import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponseDto } from 'src/app/entities/user-response-dto';
import { APIsService } from 'src/app/service/data/apis.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  userDetails:UserResponseDto=new UserResponseDto(0,'','','','');
  id:number;
  error:any;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private apiService: APIsService){}
  ngOnInit(){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.apiService.getUserById(this.id).subscribe(
      (response)=>{
        this.userDetails=response;
      },(error)=>{
        console.log(error)
      });
  }
  saveDetails(){
      
        this.apiService.updateUserDetails(this.userDetails,this.id,sessionStorage.getItem('token'))
        .subscribe((data)=>{

          this.userDetails=data;
          localStorage.setItem('user',this.userDetails.email);
          this.router.navigate(['profile']);
          
        },(error)=>{
          console.log("inside the error msg ");
          console.log(error);
          this.error=error;
          
          
        });

  }

  

}
