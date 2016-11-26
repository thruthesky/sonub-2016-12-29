import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, POSTS } from '../../../api/philgo-api/v2/post';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss'],
  providers: [ Post ]
})
export class ForumListComponent implements OnInit {

  post_id: string = null;
  page_no: number = 1;
  posts: POSTS = <POSTS> {}
  constructor(
    private route: ActivatedRoute,
    private post: Post
  ) {
    route.params.subscribe( params => this.post_id = params['post_id']);
    this.loadPost();
  }

  ngOnInit() {
  }

  loadPost() {
    let req = { post_id: this.post_id, page_no: this.page_no };
    this.post.page( req, ( posts: POSTS ) => {
      console.log('posts: ', posts);
      this.posts = posts;
    }, e => {
      alert( e );
    })
  }

}
