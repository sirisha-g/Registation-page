import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  private logInUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient,private httpClientModule:HttpClientModule) { 
    
   }
  
   saveLoginDetails(body: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.logInUrl, body, {
      observe: 'response',
      headers: this.httpHeaders
    });
  }
}
