import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from 'src/app/modules/gestion-client/add-client/add-client.component';
import { ListClientComponent } from 'src/app/modules/gestion-client/list-client/list-client.component';
import { UpdateClientComponent } from 'src/app/modules/gestion-client/update-client/update-client.component';

const routes: Routes = [

  {path:"listclient", component:ListClientComponent},
  {path:"addclient", component:AddClientComponent}, // , canActivate:[UserGuard]
  {path:"updateclient/:id", component:UpdateClientComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionClientRoutingModule { }
