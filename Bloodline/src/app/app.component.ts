import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bloodline';

  constructor(private router: Router) { }

  ngOnInit(): void {
    let userid = localStorage.getItem('userid');
    let usertype = localStorage.getItem('usertype');

    if(userid == null){
      document.getElementById("manage").style.display = "none"; 
      document.getElementById("login").style.display = "inline";
      document.getElementById("logout").style.display = "none";
    }

    if(userid != null){
      document.getElementById("login").style.display = "none";
      document.getElementById("logout").style.display = "inline";
    }
    if(usertype == "u"){
      document.getElementById("manage").style.display = "none";
    }
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
