import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import {AgmCoreModule} from '@agm/core';

//Start angular material components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from "@angular/material/sidenav"; 
//End angular material components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutComponent } from './about/about.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AboutComponent,
    MyAccountComponent,
    ViewAccountComponent,
    ScheduleAppointmentComponent,
    ManageAppointmentComponent,
    EditDialogComponent,
  ],
  entryComponents:[EditDialogComponent],
  imports: [
    MatCheckboxModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7xKpd3WpNJdfXTSebss-DREnr-rM4ecE'
    })
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
