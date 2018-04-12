import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ViaComponent } from './via/via.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'


@NgModule({
  declarations: [
    AppComponent,
    ViaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
