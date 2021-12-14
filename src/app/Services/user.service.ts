import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getAllUsers():Observable<User[]> { 
    return this._http.get<User[]>("http://localhost:8081/SpringMVC/servlet/getAllUsers");
    }
  
  deleteUser (user: User): Observable<User> {
    return this._http.delete<User>("http://localhost:8081/SpringMVC/servlet/deleteUser"+'/'+ user.id);
    }  
  
  addUser (user: User): Observable<User> {
    return this._http.post<User>("http://localhost:8081/SpringMVC/servlet/addUser",user);
    }  
  
  updateUser(user: User): Observable<User>{
      return this._http.put<User>("http://localhost:8081/SpringMVC/servlet/updateUser",user);
    }  
  
  getUserById(idUser: number): Observable<User> {
    return this._http.get<User>("http://localhost:8081/SpringMVC/servlet/getUser" +'/'+ idUser); }
}
