import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'facture',
    loadChildren: () => import('./modules/facture/facture.module')
      .then(mod => mod.FactureModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./modules/gestion-produit/gestion-produit.module')
      .then(mod => mod.GestionProduitModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./modules/not-found/not-found.module')
      .then(mod => mod.NotFoundModule)
  },
  {path:"", redirectTo:"facture", pathMatch:"full"},
  //{ path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
