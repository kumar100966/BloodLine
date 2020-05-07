import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpOperationsService {

	public url = 'https://bloodline--akeelhenry.repl.co'; 
	public token: string; 

	constructor(private cookieService: CookieService) { 
		
	}

	async login(data){
		let response = await fetch(`${this.url}/login`, {
			method: 'POST', 
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}); 

		

		if(response.ok){
			let result = await response.json(); 
			this.token = result.token; 
			return this.token; 
		}

		return false; 

	}


	async sendUserData(data){

		let response = await fetch(`${this.url}/user`, {

			method: 'Post', 
			headers: {
				'Content-Type': 'application/json',
			}, 
			body: JSON.stringify(data)

		}); 

		if(response.ok){
			let result = await response.text(); 
			console.log(result); 
			return true; 
		}else{
			console.log("error"); 
			return false; 
		}
	}


	async requestUser(){

		let response = await fetch(`${this.url}/user`, {
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
				'Authorization': this.cookieService.get('user')
			}
		}); 

		if(response.ok){
			let result = await response.json(); 
			return result; 
		}else{
			return null; 
		}
	}

	async createAppointment(data){
		let response = await fetch(`${this.url}/appointment`, {
			method: 'POST', 
			headers: {
				'Content-Type': 'application/json',
				'Authorization': this.cookieService.get('user')
			},
			body: JSON.stringify(data)
		});
		
		if(response.ok){
			let result = await response.text(); 
			console.log(result); 
			return true; 
		}else{
			console.log("error"); 
			return false; 
		}
	}


}
