import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
id:any;
post: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.postService.getPost(this.id).subscribe(data =>{
      this.post =data
    })
  }

}
