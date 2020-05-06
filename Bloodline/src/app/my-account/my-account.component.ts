import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpOperationsService } from '../http-operations.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private ajax: HttpOperationsService) { }

  ngOnInit(): void {
  }

  public choice = true;
  public donationCentre = false; 
  public checkLoginSuccess = true; 
  public finishedLogin = false; 

  displayHostOption(event){
    if(event.target.value == "Host"){
      this.donationCentre = true; 
    }else{
      this.donationCentre = false; 
    }
    
  }

  onClick(){

    this.choice = false; 
    this.checkLoginSuccess = true; 
    this.finishedLogin = false; 
    
  }


  async onSubmit(loginForm){

    let data = {
      username: loginForm.value.username, 
      password: loginForm.value.password
    };

    this.checkLoginSuccess = await this.ajax.login(data);
    if(this.checkLoginSuccess){
      this.finishedLogin = true; 
    }else
    {
      this.finishedLogin = false; 
    }

  }



}
