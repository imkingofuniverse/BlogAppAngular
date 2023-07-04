import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent {

  id: number
  comment: any = new Comment();
  error: any;
  //comment: any;
  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

  }

  saveComment() {
    this.commentService.createComment(this.comment, this.id).subscribe(data => {
      console.log(data);
      alert("Comment Posted Successfully");
      this.goToCommentList();
    },
      (error) => {
      console.log(error);
      this.error=error;});
  }

  goToCommentList() {
    this.router.navigate(['/viewcomment',this.id]);
  }

  onSubmit() {
    console.log(this.comment);
    this.saveComment();
  }

}
