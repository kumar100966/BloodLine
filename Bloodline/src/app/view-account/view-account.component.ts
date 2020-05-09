import { Component, OnInit } from '@angular/core';
import { HttpOperationsService } from '../http-operations.service'; 

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  public loggedIn = false; 
  public user; 

  constructor(private ajax:HttpOperationsService) { }

  ngOnInit(): void {
    this.onLoad(); 
  }

  async onLoad(){
    this.user = await this.ajax.requestUser();
    switch(this.user.bloodCentreId){
      case 1: 
        this.user.bloodCentreId = 'Port-of-Spain General Hospital'; 
        break; 
      case 2: 
        this.user.bloodCentreId = 'Eric Williams Medical Sciences Complex'; 
        break;
      case 3: 
        this.user.bloodCentreId = 'Sangre Grande Hospital'; 
        break;
      case 4: 
        this.user.bloodCentreId = 'Scarborough General Hospital'; 
        break;
      case 5: 
        this.user.bloodCentreId = 'San Fernando General Hospital'; 
        break;
      case 6: 
        this.user.bloodCentreId = 'Point Fortin Area Hospital'; 
        break;
      default: 
        this.user.bloodCentreId = 'None';
        break; 
    }

    switch(this.user.userType){
      case 'u': 
        this.user.userType = 'Donor'; 
        break; 
      case 'h': 
        this.user.userType = 'Host';
        break;  
      case 'a': 
        this.user.userType = 'Admin';
        break;  

    }
    
  }

}
