import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUserRoutingModule } from './gestion-user-routing.module';
import { ListUserComponent } from 'src/app/modules/gestion-user/list-user/list-user.component';
import { DetailUserComponent } from 'src/app/modules/gestion-user/detail-user/detail-user.component';
import { UpdateUserComponent } from 'src/app/modules/gestion-user/update-user/update-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListUserComponent,
    DetailUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    GestionUserRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    ListUserComponent,
    DetailUserComponent,
    UpdateUserComponent
  ]
})
export class GestionUserModule { }
