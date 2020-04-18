import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:'',
      password:''
    }); //create a form group and save it to loginForm
  }

}
