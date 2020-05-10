import { Component, OnInit } from '@angular/core';
import { HttpOperationsService } from '../http-operations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private ajax: HttpOperationsService, private router: Router) { }

  ngOnInit(): void {
  }

  public choice = true;
  public donationCentre = false; 
  public checkLoginSuccess = true; 
  public finishedLogin = false; 
  public registerFailed = false; 
  public registerSuccess = false; 

  displayHostOption(event){
    if(event.target.value == "h"){
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

      let user = await this.ajax.requestUser();

      localStorage.setItem('userid', user.id);
      localStorage.setItem('usertype', user.userType);

      if (user.userType == "h"){
        localStorage.setItem('bloodcentreid', user.bloodCentreId);
      }
      else{
        localStorage.removeItem('bloodcentreid');
      }

      this.router.navigate([''])
      setTimeout(()=>{
        window.location.reload();
      }, 50);

    }else
    {
      this.finishedLogin = false;
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
      'password': userInfo.value.password, 
      'bloodCentreId': userInfo.value.centre
    }; 

    this.registerSuccess =  await this.ajax.sendUserData(data); 

    if(!this.registerSuccess){
      this.registerFailed = true; 
    }else{
      this.registerFailed = false; 
    }

    
  }



}
