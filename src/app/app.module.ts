import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FactureModule } from './modules/facture/facture.module';
import { GestionProduitModule } from './modules/gestion-produit/gestion-produit.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundModule } from './modules/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FactureModule,
    GestionProduitModule,
    NgbModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
