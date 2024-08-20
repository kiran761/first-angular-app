import { Component } from '@angular/core';
import { TokenService } from '../token.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {

  constructor(private tokenService : TokenService){}

  auth:any={
    "username":"foo",
    "password":"foo"
  }
  token:string | null=null;

  ngOnInit(): void {
    this.loadToken();
    
  }
  loadToken() {
    this.tokenService.getToken(this.auth).subscribe((data)=>{
      console.log
      this.token=data.jwt;
      console.log(this.token);
      this.sendAuthRequest();
    },(error: any) =>{
      console.error('Error Fetching ',error);
      this.token="Error";
    });

    
    
  }

  sendAuthRequest() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
  
    const url = 'http://localhost:8081/admin';
    this.tokenService.sendAuthenticatedRequest(url, headers).subscribe(
      (data) => {
        console.log('Authenticated Request Successful:', data);
      },
      (error: any) => {
        console.error('Authenticated Request Failed:', error);
      }
    );
  }
  
  

}
