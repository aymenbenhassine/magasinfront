import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionDetails } from '../Models/ConnectionDetails';
import { LoginDetails } from '../Models/LoginDetails';

import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public http : HttpClient,
    private globalVariables : GlobalService
  
    ) { }

    
    
  authenticate(cd : ConnectionDetails) : Observable<LoginDetails>{
    return this.http.post<LoginDetails>("http://localhost:8081/SpringMVC/servlet/auth/signin",cd);
  }


  logout() {
    //sessionStorage.removeItem('authenticatedUser')
    sessionStorage.clear();
    localStorage.clear();
    this.globalVariables.role = null
    this.globalVariables.username = null
    this.globalVariables.token = ''
     console.log(this.isUserLoggedIn())
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token')
    return !(user === '')
  }
}
