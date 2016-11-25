import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  name = '';
  constructor( private route: ActivatedRoute ) { 
    route.params
      .subscribe( param => this.name = param['name'] );     
  }



  ngOnInit() {
    let q = this.route.queryParams['value'];
    let f = this.route.fragment['value'];
    if ( Object.keys(q).length == 0 ) return;
    this.name = q['name'] + ' age of : ' + q['age'] + ' with: ' + f;
  }

}
