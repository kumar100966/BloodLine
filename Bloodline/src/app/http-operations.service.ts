import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpOperationsService {

	public url = 'http://192.168.1.36:8080'; 
	public token; 

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

		let result = await response.json(); 
		this.token = (result.token);
		console.log(this.token);  

	}


}
