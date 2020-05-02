import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})

export class ScheduleAppointmentComponent implements OnInit {

  myForm: FormGroup;
  selectedOption;

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      center: [undefined, [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      noPreD: [false, [Validators.required]]
    });
    this.myForm.valueChanges.subscribe(console.log)
  }

  //Map
  setSelect(i){
    this.selectedOption = ""+i+""; //Sets dropdown value after clicking marker on map
  }

  //Date
  minDate = new Date(); //Used to limit calander to only the current and future dates
  selectedDate;

  onSelect(event){
    this.selectedDate = event; //Gets date from calander
    const dateString = event.toDateString(); //Converts date to string
    this.myForm.get('date').setValue(dateString);

  }

  dateFilter = (d: Date | null): boolean => { // Prevent Saturday and Sunday from being selected.
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  //Time

  times = ['8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM'];

  //Done

  onSubmit(){
    console.log("Submitted");
  }


}
