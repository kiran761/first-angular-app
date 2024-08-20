import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  sendAuthenticatedRequest(url: string, headers: HttpHeaders) : Observable<any> {
 
        return this.http.get(url, { headers ,responseType:'text' as 'json'  });
  }
  constructor(private http : HttpClient){}
  getToken(credentials :{username:string ; password : string}): Observable<any> {
    let url ="http://localhost:8081/authenticate"
    return this.http.post(url,credentials);
  } 

  
}
