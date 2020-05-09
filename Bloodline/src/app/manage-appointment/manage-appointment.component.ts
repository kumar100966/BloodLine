import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { HttpOperationsService } from '../http-operations.service'; 

@Component({
  selector: 'app-manage-appointment',
  templateUrl: './manage-appointment.component.html',
  styleUrls: ['./manage-appointment.component.css']
})
export class ManageAppointmentComponent implements OnInit {
  

public host = false;
appointments;

constructor(public dialog: MatDialog, private ajax:HttpOperationsService) { }

openDialog(i){
  let dialogRef = this.dialog.open(AppointmentDialogComponent, 
    {data: 
      {
        name: this.appointments[i].userId,
        date: this.appointments[i].date,
        time: this.appointments[i].time
      }
    });
        
    dialogRef.disableClose = true

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result = "confirm"){
        this.appointments[i].status = "confirmed"
      }
      else if(result = "rejected") {
        this.appointments[i].status = "rejected"
      }
    });
}

  ngOnInit(): void {
    this.onLoad();
  }

  async onLoad(){

    if(localStorage.getItem('usertype') == "h"){
      this.host = true;
      this.appointments = await this.ajax.requestAppointments(localStorage.getItem('bloodcenterid'))
      console.log(this.appointments)
    }
    else{
      this.host = false;
    }

  }



}
