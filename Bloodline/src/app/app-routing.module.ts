import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


//import our newly created components
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'; 
import { AboutComponent } from './about/about.component'; 
import { MyAccountComponent } from './my-account/my-account.component'; 
import { ViewAccountComponent } from './view-account/view-account.component'; 

//setup routing
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcomePage', component: WelcomePageComponent}, 
  { path: 'about', component: AboutComponent},
  { path: 'MyAccount', component: MyAccountComponent},
  { path: 'ViewAccount', component: ViewAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
