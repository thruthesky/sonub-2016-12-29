import { Component, OnInit } from '@angular/core';
import { Location } from  '../../providers/location'
import { Post, POST_DATA } from '../../../../api/philgo-api/v2/post';


export interface  PostEdit {
  idx: number;
  category_1: string;
  post_id : string;
  title: string;
  content: string;
  email: string;
  password: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  mobile: string;
  birthday: string;
  birth_year?: number | string;
  birth_month?: number | string;
  birth_day?: number | string;
  address: string;
  city: string;
  province: string;
  country: string;
  extra_2: string; // year of experience
  gender: 'M' | 'F' | '';
  attachment_1?: string;
}


@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {

  data : POST_DATA = <POST_DATA> {
    post_id: 'jobs',
    varchar_1: 'all',
    int_1: 'all',

  };

  errorOnPost = null;
  numbers = Array.from(new Array(20), (x,i) => i+1);
  provinces: Array<string> = [];
  cities = [];
  showCities: boolean = false;

  constructor(
      private location: Location,
      private post: Post
  ) { }

  ngOnInit() {
  }

  onClickProvince() {
    this.data.varchar_2 = 'all';
    if( this.data.varchar_1 != 'all') {
      this.location.get_cities( this.data.varchar_1, re => {
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

}
