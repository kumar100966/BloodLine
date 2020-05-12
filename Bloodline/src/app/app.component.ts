import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bloodline';
  
  userid = localStorage.getItem('userid');
  usertype = localStorage.getItem('usertype');

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  logout(){
    localStorage.removeItem("userid")
    localStorage.removeItem("usertype")
    localStorage.removeItem("token")
    localStorage.removeItem("bloodcentreid")

    this.router.navigate([''])

    setTimeout(()=>{
      window.location.reload();
    }, 50);
  }
  
}
