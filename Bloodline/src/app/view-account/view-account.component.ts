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
  }

  async onLoad(){
    this.user = await this.ajax.requestUser();
    console.log(this.ajax.token); 
    
  }

}
