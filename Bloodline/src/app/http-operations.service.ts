import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpOperationsService {

	public url = 'https://guarded-river-97089.herokuapp.com'; 
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
			this.cookieService.set('user', this.token)
			return true; 
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
			return true; 
		}else{
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

		console.log(this.cookieService.get('user')); 
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
