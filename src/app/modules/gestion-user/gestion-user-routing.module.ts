import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from 'src/app/modules/gestion-user/detail-user/detail-user.component';
import { ListUserComponent } from 'src/app/modules/gestion-user/list-user/list-user.component';

const routes: Routes = [
  {path:"listuser", component:ListUserComponent, children:[
    {path:"detailuser/:role",component:DetailUserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUserRoutingModule { }
