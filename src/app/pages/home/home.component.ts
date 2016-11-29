import { Component, OnInit } from '@angular/core';
import { Member, MEMBER_LOGIN_DATA } from '../../api/philgo-api/v2/member';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  login = <MEMBER_LOGIN_DATA> {};
  constructor( private member: Member ) {
    this.login = member.getLoginData();
  }

  ngOnInit() {
  }



}
