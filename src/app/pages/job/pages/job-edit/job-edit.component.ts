import { Component, OnInit } from '@angular/core';
import { Location } from  '../../providers/location'
import { Post, POST_DATA } from '../../../../api/philgo-api/v2/post';


@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {

  form : POST_DATA = <POST_DATA> {
    subject: 'Job Post Title',
    content: 'Job Post Content',
    post_id: 'jobs',
    sub_category: '', //sub_category
    text_1: '', //first name
    text_2: '', //middle name
    text_3: '', //last name
    char_1: 'M', //Gender
    varchar_1: '', //address
    varchar_2: 'all', //province
    varchar_3: 'all', //city
    varchar_4: '', //mobile
    varchar_5: '2010-01-25', //birthday
    varchar_6: '', //Personal Content
    int_1: '0', //work experience
    int_2: '', //day
    int_3: '', //month
    int_4: '', //day
  };
  loader: boolean = false;
  errorOnPost = null;
  numbers = Array.from(new Array(20), (x,i) => i+1);
  provinces: Array<string> = [];
  cities = [];
  showCities: boolean = false;

  constructor(
    private location: Location,
    private post: Post
  ) {
    location.get_province( re => {
      this.provinces = re;
    }, e => {
      console.log('error location.get_province::', e);
    });
  }

  get cityKeys() {
    return Object.keys( this.cities );
  }

  ngOnInit() {
  }

  onClickProvince() {
    if( this.form.varchar_2 != 'all') {
      this.form.varchar_3 = this.form.varchar_2;
      this.location.get_cities( this.form.varchar_2, re => {
        console.log('cities', re);
        if(re) {
          this.cities = re;
          this.showCities = true;
        }
      }, e => {
        console.log('error location.get_cities::', e);
      });
    }
  }


  onClickSubmit(){
    console.log("onClickSubmit:: ", this.form);
    this.loader = true;
    this.errorOnPost = null;
    if(this.form['varchar_5']) {
      let str = this.form['varchar_5'].split('-');
      this.form['int_2'] = parseInt(str[0]);
      this.form['int_3'] = parseInt(str[1]);
      this.form['int_4'] = parseInt(str[2]);
    }
    if(this.form.idx) {
      this.updatePost();
    }
    else {
      this.createPost();
    }
  }

  createPost() {
    console.log('createPost::');
    this.post.create( this.form, data => {
        console.log("post create success: ", data);
        this.openConfirmation();
        this.loader = false;
        this.clearInputs();
      },
      error => alert( error ),
      () => {}
    )
  }

  openConfirmation() {
    alert('Success::Your post has been posted.');
  }

  updatePost() {
    console.log('createPost::');
  }

  clearInputs(){
    this.form = {
      subject: 'Job Post Title',
      content: 'Job Post Content',
      post_id: 'jobs',
      sub_category: '', //sub_category
      text_1: '', //first name
      text_2: '', //middle name
      text_3: '', //last name
      char_1: 'M', //Gender
      varchar_1: '', //address
      varchar_2: 'all', //province
      varchar_3: 'all', //city
      varchar_4: '', //mobile
      varchar_5: '2010-01-25', //birthday
      varchar_6: '', //Personal Content
      int_1: '0', //work experience
      int_2: '', //day
      int_3: '', //month
      int_4: '', //day
    };
    this.showCities = false;
  }


}
