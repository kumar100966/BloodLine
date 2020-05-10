import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpOperationsService } from '../http-operations.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar, private ajax:HttpOperationsService) { }

  ngOnInit(): void {
  }

  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message, action, {duration: 5000, panelClass: ['snackbar']});
  }

  async rejectAppointment(id){
    let result = await this.ajax.changeAppointmentStatus(id,"Rejected");
  }

  async confirmAppointment(id){
    let result = await this.ajax.changeAppointmentStatus(id,"Confirmed");
  }
  

}
