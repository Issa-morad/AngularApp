import { Component } from '@angular/core';
  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService1 } from '../post1.service';
import { Post1 } from '../post1';
  
@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  
  posts: Post1[] = [];
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService1) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post1[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
      
  
}
