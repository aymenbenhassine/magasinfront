import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionClientRoutingModule } from './gestion-client-routing.module';
import { AddClientComponent } from 'src/app/modules/gestion-client/add-client/add-client.component';
import { ListClientComponent } from 'src/app/modules/gestion-client/list-client/list-client.component';
import { UpdateClientComponent } from 'src/app/modules/gestion-client/update-client/update-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    GestionClientRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListClientComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  declarations: [
    ListClientComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  providers: [
  ],
})
export class GestionClientModule { }
