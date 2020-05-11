import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HttpOperationsService } from '../http-operations.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-appointment',
  templateUrl: './manage-appointment.component.html',
  styleUrls: ['./manage-appointment.component.css']
})
export class ManageAppointmentComponent implements OnInit {
  

host = false;
appointments;
users = [];
data = [];

constructor(public dialog: MatDialog, private ajax:HttpOperationsService, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.onLoad();
  }

  async onLoad(){

    if(localStorage.getItem('usertype') == "h"){
      this.host = true;
      this.appointments = await this.ajax.requestAppointments(localStorage.getItem('bloodcentreid'))

      if(this.appointments != null){
        for(let i in this.appointments){
          this.data.push({
            appointment: this.appointments[i],
            user: await this.ajax.requestUserId(this.appointments[i].userId)
          })
        }
      }
    }
    else{
      this.host = false;
    }

  }

  async rejectAppointment(id){
    let result = await this.ajax.changeAppointmentStatus(id,"Rejected");

    if(result = true){
      location.reload()
    }

  }

  async confirmAppointment(id){
    let result = await this.ajax.changeAppointmentStatus(id,"Confirmed");

    if(result = true){
      location.reload()
    }
  }

  async completeAppointment(id){
    let result = await this.ajax.changeAppointmentStatus(id,"Completed");

    if(result = true){
      location.reload()
    }
  }



}
