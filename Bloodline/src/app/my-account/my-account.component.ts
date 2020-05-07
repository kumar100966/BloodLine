import { Component, OnInit } from '@angular/core';
import { HttpOperationsService } from '../http-operations.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private ajax: HttpOperationsService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  public choice = true;
  public donationCentre = false; 
  public checkLoginSuccess = true; 
  public finishedLogin = false; 
  public registerFailed = false; 
  public registerSuccess = false; 
  public userdata;

  displayHostOption(event){
    if(event.target.value == "Host"){
      this.donationCentre = true; 
    }else{
      this.donationCentre = false; 
    }
    
  }

  onClick(){

    this.choice = false; 
    this.checkLoginSuccess; 
    this.finishedLogin = false; 
    
  }


  async onSubmit(loginForm){

    let data = {
      username: loginForm.value.username, 
      password: loginForm.value.password
    };

    this.userdata = await this.ajax.login(data);
    if(this.userdata != ""){
      this.finishedLogin = true;
      this.checkLoginSuccess = true;
      this.cookieService.set('user', this.userdata)
    }else
    {
      this.finishedLogin = false;
      this.checkLoginSuccess = false; 
    }

  }

  async onSubmitUserData(userInfo){

    let data = {
      'username': userInfo.value.username, 
      'userType': userInfo.value.accountType, 
      'fName': userInfo.value.firstName, 
      'lName': userInfo.value.lastName, 
      'age': userInfo.value.age , 
      'DOB': userInfo.value.DOB, 
      'bloodGroup': userInfo.value.bloodGroup, 
      'password': userInfo.value.password
    }; 

    this.registerSuccess =  await this.ajax.sendUserData(data); 

    if(!this.registerSuccess){
      this.registerFailed = true; 
    }

    
  }



}
