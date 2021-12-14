import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

 
  constructor(private _http:HttpClient) { }

getAllClients():Observable<Client[]> { 
  return this._http.get<Client[]>("http://localhost:8081/SpringMVC/servlet/getAllClients");
  }

deleteClient (client: Client): Observable<Client> {
  return this._http.delete<Client>("http://localhost:8081/SpringMVC/servlet/deleteClient"+'/'+ client.idClient);
  }  

addClient (client: Client): Observable<Client> {
  return this._http.post<Client>("http://localhost:8081/SpringMVC/servlet/addClient",client);
  }  

updateClient(client: Client): Observable<Client>{
    return this._http.put<Client>("http://localhost:8081/SpringMVC/servlet/updateClient",client);
  }  

getClientById(idClient: number): Observable<Client> {
  return this._http.get<Client>("http://localhost:8081/SpringMVC/servlet/getClient" +'/'+ idClient); }
  
}