import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-manage-appointment',
  templateUrl: './manage-appointment.component.html',
  styleUrls: ['./manage-appointment.component.css']
})
export class ManageAppointmentComponent implements OnInit {

  appoinments = [
    {
      name: "Akeel Henry",
      username: "@akeelhenry",
      date: "12/12/2020",
      time: "1:00 PM",
      status: "new"
    },
    {
      name: "John Doe",
      username: "@johnD",
      date: "12/12/2020",
      time: "1:00 PM",
      status: "new"
    }
  ]

  constructor(public dialog: MatDialog) { }

  openDialog(i){
    let dialogRef = this.dialog.open(AppointmentDialogComponent, 
      {data: 
        {
          name: this.appoinments[i].name,
          date: this.appoinments[i].date,
          time: this.appoinments[i].time
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result = "confirm"){
        this.appoinments[i].status = "confirmed"
      }
      else{
        this.appoinments[i].status = "rejected"
      }
    });
  }

  ngOnInit(): void {
  }

}
