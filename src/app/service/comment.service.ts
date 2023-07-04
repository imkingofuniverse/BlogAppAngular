import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseURL = "http://localhost:9091/api/v1/posts";
  private cURL = "comments";

  constructor(private httpClient: HttpClient) { }

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.baseURL}/${postId}/${this.cURL}`);
  }

  createComment(comment: Comment, postId: number): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/${postId}/${this.cURL}`, comment);
  }

  getCommentById(postId: number, commentId: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${postId}/${this.cURL}/${commentId}`);
  }

  deleteCommentById(postId: number, commentId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${postId}/${this.cURL}/${commentId}`);
  }

  updateCommentById(postId: number, commentId: number, comment: Comment): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${postId}/${this.cURL}/${commentId}`, comment);
  }


}