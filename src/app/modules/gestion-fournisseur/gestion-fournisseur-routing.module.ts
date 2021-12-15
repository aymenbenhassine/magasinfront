import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailFournisseurComponent } from './detailfournisseur/add-detail-fournisseur/add-detail-fournisseur.component';
import { EditDetailFournisseurComponent } from './detailfournisseur/edit-detail-fournisseur/edit-detail-fournisseur.component';
import { ListDetailFournisseurComponent } from './detailfournisseur/list-detail-fournisseur/list-detail-fournisseur.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur/edit-fournisseur/edit-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';

const routes: Routes = [
  {path:"view-Fournisseur", component:ListFournisseurComponent },
  { path: "view-Fournisseur", component: ListFournisseurComponent },  
  { path: "add-Fournisseur", component: AddFournisseurComponent }, 
  { path: "edit-Fournisseur", component: EditFournisseurComponent },
  { path: "view-Detail-Fournisseur", component: ListDetailFournisseurComponent },  
  { path: "add-Detail-Fournisseur", component: AddDetailFournisseurComponent }, 
  { path: "edit-Detail-Fournisseur", component: EditDetailFournisseurComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFournisseurRoutingModule { }
