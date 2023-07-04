import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../entities/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseURL = "http://localhost:9091/api/v1/post";

  //pid = "33"

  constructor(private httpClient: HttpClient) { }

  getPostsList(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.baseURL}`);
  }

  createPost(post: Post, pid:any): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${pid}`, post);
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.baseURL}/${id}`);
  }

  updatePost(id: number, post: Post): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, post);
  }

  deletePost(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}