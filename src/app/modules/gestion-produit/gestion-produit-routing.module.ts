import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';
import { UpdateDetailProduitComponent } from './components/update-detail-produit/update-detail-produit.component';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';

const routes: Routes = [
  {path:"listproduit", component:ListProduitComponent},
  {path:"", redirectTo:"listproduit", pathMatch:"full"},
  {path:"home", redirectTo:"listproduit", pathMatch:"full"},
  {path:"addproduit", component:AddProduitComponent},
  {path:"updateproduit/:id", component:UpdateProduitComponent},
  {path:"updatedetailproduit/:id", component:UpdateDetailProduitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProduitRoutingModule { }
