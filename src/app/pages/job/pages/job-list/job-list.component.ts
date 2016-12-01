import { Component, OnInit } from '@angular/core';
import { Post, POST_DATA } from '../../../../api/philgo-api/v2/post';
import { PAGE_DATA, POSTS, POST_DATA, POST_RESPONSE } from '../../../../api/philgo-api/v2/philgo-api-interface';


@Component({
  selector: 'app-job-list',
  templateUrl: 'job-list.component.html',
  styleUrls: ['job-list.component.scss']
})
export class JobListComponent implements OnInit {


  post_id = 'jobs';
  constructor(private post: Post
  ) {

    this.post.page( {post_id: this.post_id, page_no: 1}, (posts: POSTS) => {
      console.log('posts:', posts);
      //console.log('point ad title: ', posts.ads[0].subject);
      //console.log('comment user name: ', posts.posts[0].comments[0].member.name);
    }, e => {
      alert(e);
    });
  }

  ngOnInit() {
  }

}
