import { Component, OnInit } from '@angular/core';
import { Member, MEMBER_DATA } from '../../../api/philgo-api/v2/member';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = <MEMBER_DATA> {};
  constructor( private member: Member ) { }

  ngOnInit() {
  }


  onClickRegister() {

    this.member.register( this.form, login => {
      // this.router.navigate(['']);
    }, error => alert("Login error: " + error ) );
  }


}
