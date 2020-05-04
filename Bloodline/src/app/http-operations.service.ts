import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpOperationsService {

	public url = 'http://127.0.0.1:8080/'; 
	public posts; 

	constructor(public http: HttpClient) { 
		
	}

	

}
