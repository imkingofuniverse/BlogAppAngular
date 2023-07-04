import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/entities/comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent {

  id: number;
  pid: number;
  comment: any = new Comment();
  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.pid = this.route.snapshot.params['id1'];
    this.id = this.route.snapshot.params['id2'];
    console.log("pid:",this.pid," id:",this.id)

    this.commentService.getCommentById(this.pid, this.id).subscribe(data => {
      this.comment = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.commentService.updateCommentById(this.pid, this.id, this.comment).subscribe(data => {
      this.goToCommentList();
    }
      , error => console.log(error));
  }

  goToCommentList() {
    this.router.navigate(['viewcomment',this.pid]);
  }

}