import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { Location } from  '../../providers/location'


@Component({
  selector: 'app-job-index',
  templateUrl: './job-index.component.html',
  styleUrls: ['./job-index.component.scss']
})
export class JobIndexComponent implements OnInit {


  range: number = 34;
  items: Observable<Array<string>>;
  term = new FormControl();

  searching: boolean = false;
  numbers = Array.from(new Array(20), (x,i) => i+1);
  provinces: Array<string> = [];
  cities = [];
  showCities: boolean = false;

  data = {
    category: 'all',
    name: '',
    varchar_2: 'all',
    varchar_1: 'all',
    int_1: 'all', //work experience
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
    this.showLoader();
    console.log("search() form has changed. you can search now: data: ", this.data);
    let cond = '';

  }

  onClickProvince() {
    if( this.data.varchar_1 != 'all') {
      this.data.varchar_2 = this.data.varchar_1;
      this.location.get_cities( this.data.varchar_1, re => {
        console.log('cities', re);
        if(re) {
          this.cities = re;
          console.log(re);
          this.showCities = true;
        }
      }, e => {
        console.log('error location.get_cities::', e);
      });
    }
    this.search();
  }

  showLoader() {
    this.searching = true;
  }
  hideLoader() {
    this.searching = false;
  }

  onChange() {
    console.log("onChange() form has changed. you can search now: data: ", this.data);
  }

}
