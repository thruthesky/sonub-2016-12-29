import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { Location } from  '../../providers/location'

export interface SearchData {
  category_1: string;
  name: string;
  city: string;
  province: string;
  extra_2: string;
  male: boolean;
  female: boolean;
  age?: {
    lower: number;
    upper: number;
  }
}

@Component({
  selector: 'app-job-index',
  templateUrl: './job-index.component.html',
  styleUrls: ['./job-index.component.scss']
})
export class JobIndexComponent implements OnInit {

  items: Observable<Array<string>>;
  term = new FormControl();
  numbers = Array.from(new Array(20), (x,i) => i+1);
  provinces: Array<string> = [];
  cities = [];
  showCities: boolean = false;

  data: SearchData = {
    category_1: 'all',
    name: '',
    city: 'all',
    province: 'all',
    extra_2: 'all', //work experience
    male: false,
    female: false
  };
  constructor(private location: Location) {
    location.get_province( re => {
      this.provinces = re;
    }, e => {
      console.log('error location.get_province::', e);
    });
  }

  ngOnInit() {
  }

  get cityKeys() {
    return Object.keys( this.cities );
  }

  search( $event? ) {
    let cond = '';
    if( this.data.province != 'all') {
      cond += " AND province = '"+ this.data.province +"'"
      this.location.get_cities( this.data.province, re => {
        console.log('cities', re);
        if(re) {
          this.cities = re;
        }
      }, e => {
        console.log('error location.get_cities::', e);
      });
    }
  }

}
