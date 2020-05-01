import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})

export class ScheduleAppointmentComponent implements OnInit {

  myForm: FormGroup;
  selectedOption;
  latitude = 10.556176;
  longitude = -61.245127;

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
      center: '',
      date: '',
      time: '',
      previous: ''
    });

    this.myForm.valueChanges.subscribe(console.log)
  }

  setSelect(i){
    this.selectedOption = ""+i+"";
  }

}
