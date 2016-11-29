import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member, MEMBER_LOGIN_DATA } from '../../../api/philgo-api/v2/member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = <MEMBER_LOGIN_DATA> {};
  constructor( private router: Router, private member: Member ) { }

  ngOnInit() {
  }


  onClickLogin() {
    this.member.login( this.form, login => {
      console.log("login success: ");
      this.router.navigate(['']);
    }, er => alert("login error:" + er));
  }


}
