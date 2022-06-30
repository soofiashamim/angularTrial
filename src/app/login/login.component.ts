import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ServiceLoginService } from '../service-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    public show: boolean = false;
  constructor(private service : ServiceLoginService) { }
  loginForms = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  });


  loginUser(){
    console.log(this.loginForms.value);
    console.log(this.loginForms.value.username);
    console.log(this.loginForms.value.password);
    var username = this.loginForms.value.username;
    var password = this.loginForms.value.password;
    this.service.loginservice(username,password);

    if(username == " " || password == "")
    this.show = true;

    else if (!(/^[a-zA-Z]/.test(username))) {
        console.log("username should only contain alphabets");
     }


}
ngOnInit(): void {
  
}
}