import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpOperationsService } from '../http-operations.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})

export class ScheduleAppointmentComponent implements OnInit {

  selectedOption;
  hasAppointment = false;
  noAppointment = false;
  loading = true;
  appointment;

  //Sets map to Trinidad and Tobago
  latitude = 10.556176;
  longitude = -61.245127;

  //Coordinates of donation centers
  coordinates = [
    {latitude: 10.661829, longitude:-61.507798},
    {latitude: 10.647143, longitude:-61.422997},
    {latitude: 10.596794, longitude:-61.132716},
    {latitude: 11.181444, longitude:-60.753078},
    {latitude: 10.281862, longitude:-61.467057},
    {latitude: 10.182640, longitude:-61.677529}
  ];

  centers = [
    {value: "1", viewValue: "Port-of-Spain General Hospital"},
    {value: "2", viewValue: "Eric Williams Medical Sciences Complex"},
    {value: "3", viewValue: "Sangre Grande Hospital"},
    {value: "4", viewValue: "Scarborough General Hospital"},
    {value: "5", viewValue: "San Fernando General Hospital"},
    {value: "6", viewValue: "Point Fortin Area Hospital"}
  ]

  restriction = {
    latLngBounds:{
      north: 11.5, 
      south: 9.8, 
      west: -62.6, 
      east: -60.0
    }
  }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private ajax: HttpOperationsService, private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.firstFormGroup = this.fb.group({
      center: [undefined, Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      date: ['', Validators.required]
    });
    this.thirdFormGroup = this.fb.group({
      time: ['', Validators.required]
    });

    this.appointmentCheck();
  }

   //Check for appointment

  async appointmentCheck(){
    this.appointment = await this.ajax.requestUserAppointment(localStorage.getItem('userid'));
    
    if(this.appointment == null){
      this.noAppointment = true;
      this.loading = false;
      this.hasAppointment = false;
    }
    else{
      for(let i in this.appointment){
        if(this.appointment[i].status != "Cancelled"){
          this.noAppointment = false;
          this.loading = false;
          this.hasAppointment = true;
          break;
        }
        else{
          this.noAppointment = true;
          this.loading = false;
          this.hasAppointment = false;
        }
      }
    }
  }

  //Map
  setSelect(i){
    this.selectedOption = ""+(i+1)+""; //Sets dropdown value after clicking marker on map
  }

  //Date
  minDate = new Date(); //Used to limit calander to only the current and future dates
  selectedDate;

  onSelectCalendar(event){
    this.selectedDate = event; //Gets date from calander
    const dateString = event.toDateString(); //Converts date to string
    this.secondFormGroup.get('date').setValue(dateString);

  }

  dateFilter = (d: Date | null): boolean => { // Prevent Saturday and Sunday from being selected.
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  //Time

  times = ['8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30PM', '2:00 PM', '2:30 PM', '3:00 PM'];

  //Done

  disabledAgreement: boolean = true;
  
  changeCheck(event){
    this.disabledAgreement = !event.checked;
  }

  async onSubmit(){

    let data = {
      date: this.secondFormGroup.get('date').value,
      time: this.thirdFormGroup.get('time').value,
      centreId: this.firstFormGroup.get('center').value,
      userId: localStorage.getItem('userid')
    };

    console.log(data)

    let success = await this.ajax.createAppointment(data); 

    if(success == true){
      let snackBarRef = this.snackBar.open("Appointment Created", "Dismiss", {duration: 2000, panelClass: ['snackbar']});
      
      snackBarRef.afterDismissed().subscribe(() => {
        location.reload();
      });
    }
    else{
      let snackBarRef = this.snackBar.open("Error, Please Try Again", "Dismiss", {duration: 5000, panelClass: ['snackbar']});
    }

  }

  async cancleAppointment(){
    for(let i in this.appointment){
      if(this.appointment[i].status == "Confirmed" || this.appointment[i].status == "Scheduled"){
        let result = await this.ajax.cancleAppointment(this.appointment[i].aptId);
      }
    }
  }

}
