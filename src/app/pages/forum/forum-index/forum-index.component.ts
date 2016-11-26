import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type FORUMS = Array< { name: Array<string> } >;

@Component({
  selector: 'app-forum-index',
  templateUrl: './forum-index.component.html',
  styleUrls: ['./forum-index.component.scss']
})
export class ForumIndexComponent implements OnInit {
  forum_names = [ 'community', 'buyandsell', 'life', 'travel', 'love', 'news', 'info' ];
  forums: FORUMS = <FORUMS> {};


  constructor( private router: Router ) {
    console.log("ForumIndexPage::constructor() : ");
    this.forums['community'] = ['greeting', 'knowhow', 'wanted', 'case', 'lookfor', 'phil_life_tip', 'freetalk', 'caution', 'qna', 'party'];
    this.forums['buyandsell'] = ['personal', 'buyandsell', 'biz_partner', 'massage', 'real_estate', 'phone', 'food_delivery', 'rent', 'cars', 'boarding_house'];
    this.forums['life'] = ['tagalog', 'document', 'im', 'visa'];
    this.forums['travel'] = ['golf', 'rentcar', 'hotel', 'rest', 'woman_place', 'travel_free', 'nature', 'travel_photo', 'travel_story'];
    this.forums['love'] = ['mary', 'marriage_process', 'new_marrage_story', 'group__kopino', 'kophil'];
    this.forums['news'] = ['reminder', 'database', 'typoon', 'news'];
    this.forums['info'] = ['business', 'info', 'internet', 'newcomer'];
  }

  ngOnInit() {
  }

  
  onClickForum( post_id ) {
    console.log('onClickForum() post_id: ', post_id);
    this.router.navigate( [ '/forum', post_id ] );

  }


}
