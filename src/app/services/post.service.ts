import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const apiUrl = 'http://localhost:3000/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(apiUrl);
  }
  getPost(id: undefined | string){
return this.http.get(`${apiUrl}/${id}`);
  }
  deletePost(id: number | string){
    return this.http.delete(`${apiUrl}/${id}`);
  }
  createPost(obj: {title: string, content: string, status: any}){
    return this.http.post(apiUrl, obj);
  }
  updatePost(id: number|string, obj: {title: string, content: string, status: any}) {
    return this.http.put(`${apiUrl}/${id}`, obj);
  }
}
