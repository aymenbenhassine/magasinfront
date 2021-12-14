import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../Services/client.service';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  myForm:FormGroup;
  client : Client= new Client();
  constructor(private cs:ClientService, private ac:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(next=>this.cs.getClientById(Number(next.get(
      'id'))).subscribe(res=>{this.client=res}), error=>console.log(error));
  }

  updateClient(){
    this.cs.updateClient(this.client).subscribe(res => {  console.log('Product created!');
    this.router.navigateByUrl('/listclient');
  });
}
}
