import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpOperationsService } from '../http-operations.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  form: FormGroup;
  id;

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<EditDialogComponent>,private ajax: HttpOperationsService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: ["", Validators.required],
      time: ["", Validators.required]
    });
  }

  //Date
  minDate = new Date(); //Used to limit calander to only the current and future dates
  selectedDate;

  onSelectCalendar(event){
    this.selectedDate = event; //Gets date from calander
    const dateString = event.toDateString(); //Converts date to string
    this.form.get('date').setValue(dateString);

  }

  dateFilter = (d: Date | null): boolean => { // Prevent Saturday and Sunday from being selected.
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  times = ['8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30PM', '2:00 PM', '2:30 PM', '3:00 PM'];

  async save() {

    let result = await this.ajax.editAppointmentDetials(this.data.aptId , this.form.value);
    if(result = true){
      let result = await this.ajax.changeAppointmentStatus(this.data.aptId, "Scheduled");
      this.dialogRef.close("Success");
    }
    else{
      this.dialogRef.close("Fail");
    }
  }

  close() {
      this.dialogRef.close("No Edit");
  }
}