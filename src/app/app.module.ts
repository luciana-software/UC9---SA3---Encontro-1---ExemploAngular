import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './views/contato/contato.component';
import { LoginComponent } from './views/login/login.component';
import { EplayersComponent } from './views/eplayers/eplayers.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    LoginComponent,
    EplayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
