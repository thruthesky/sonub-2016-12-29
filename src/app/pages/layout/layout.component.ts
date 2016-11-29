import { Component, OnInit } from '@angular/core';
import { Member } from '../../api/philgo-api/v2/member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  login;
  constructor( private router: Router, private member: Member ) {
    this.login = member.getLogin();
   }

  ngOnInit() {
  }

  onClickLogout() {
    this.member.logout();
    this.login = null;
    this.router.navigate(['']);
  }

}
