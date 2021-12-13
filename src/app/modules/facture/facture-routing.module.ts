import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFactureComponent } from './component/add-facture/add-facture.component';
import { ListFacturesPayerComponent } from './component/list-factures-payer/list-factures-payer.component';
import { ListFacturesComponent } from './component/list-factures/list-factures.component';
import { UpdateFactureComponent } from './component/update-facture/update-facture.component';

const routes: Routes = [
  {path:"", component:ListFacturesComponent},
  {path:"facturenonpayer", component:ListFacturesComponent},
  {path:"facturepayer", component:ListFacturesPayerComponent},
  {path:"add", component:AddFactureComponent},
  {path:"update/:id", component:UpdateFactureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
