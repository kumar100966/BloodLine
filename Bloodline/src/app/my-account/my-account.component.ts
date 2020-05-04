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

  displayHostOption(event){
    if(event.target.value == "Host"){
      this.donationCentre = true; 
    }else{
      this.donationCentre = false; 
    }
    
  }

  onClick(){

    this.choice = false; 
    
  }


  onSubmit(loginForm){

    let data = {
      username: loginForm.value.userName, 
      password: loginForm.value.password
    };

    console.log(this.ajax.login(data)); 

  }



}
