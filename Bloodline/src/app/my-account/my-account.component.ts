import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor() { }

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

}
