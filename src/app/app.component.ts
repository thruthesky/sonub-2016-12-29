import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private router: Router ) {

  }
  onClickTwoPage() {
    this.router.navigate( [ '/two' ], {
      queryParams: { name: 'JaeHo Song', age: 44 },
      fragment: 'anchor-profile'
    } );
  }
}
