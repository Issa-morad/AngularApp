import { Component } from '@angular/core';
  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Post2 } from '../post2';
import { PostService2 } from '../post2.service';
  
@Component({
  selector: 'app-index2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index2.component.html',
  styleUrl: './index2.component.css'
})
export class Index2Component {
  
  posts: Post2 | undefined;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService2) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post2)=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
      
  
}
