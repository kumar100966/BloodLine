import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


//import our newly created components
import { WelcomePageComponent } from './welcome-page/welcome-page.component'; 
import { AboutComponent } from './about/about.component'; 
import { MyAccountComponent } from './my-account/my-account.component'; 
import { ViewAccountComponent } from './view-account/view-account.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';

//setup routing
const routes: Routes = [
  { path: '', component: WelcomePageComponent}, 
  { path: 'Info', component: AboutComponent},
  { path: 'Login', component: MyAccountComponent},
  { path: 'ViewAccount', component: ViewAccountComponent },
  { path: 'scheduleappointment', component: ScheduleAppointmentComponent},
  { path: 'manageappointment', component: ManageAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
