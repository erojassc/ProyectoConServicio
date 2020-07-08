import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { ListaComponent } from './Components/lista/lista.component';
import { ItemComponent } from './Components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FormularioComponent,
    ListaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
