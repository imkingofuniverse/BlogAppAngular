import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { AdminService } from 'src/app/service/admin.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts: Post[];

  constructor(private postService: PostService,
    private router: Router,
    public adminService:AdminService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {
    this.postService.getPostsList().subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }

  updatePost(id: number) {
    this.router.navigate(['updatepost', id]);
  }

  viewComment(id: number) {
    this.router.navigate(['viewcomment', id]);
  }

  createComment(id: number) {
    this.router.navigate(['createcomment', id]);
  }

  deletePost(id: number) {
    if (confirm("Do you want to delete?")) {
      this.postService.deletePost(id).subscribe(data => {
        console.log(data);
        this.getPosts();
      },(error)=>{
        this.getPosts();
      });
    } 
  } 

}