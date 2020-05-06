import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpOperationsService {

	public url = 'http://192.168.1.36:8080'; 
	public token: string; 

	constructor() { 
		
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
			console.log(result); 
			return true; 
		}else{
			console.log("error"); 
			return false; 
		}
	}


	async requestUser(){

		console.log(this.token); 

		let response = await fetch(`${this.url}/user`, {
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `JWT ${this.token}` 
			}
		}); 

		if(response.ok){
			let result = await response.json(); 
			return result; 
		}else{
			return null; 
		}
	}


}
