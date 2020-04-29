import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


//import our newly created components
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'; 
import { AboutComponent } from './about/about.component'; 

//setup routing
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcomePage', component: WelcomePageComponent}, 
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
