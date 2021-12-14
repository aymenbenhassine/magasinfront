import { Injectable } from '@angular/core';
import { LoginDetails } from '../models/LoginDetails';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor() { }
  authenticationDetails: LoginDetails
    token =''
    username =null
    role=null
}
