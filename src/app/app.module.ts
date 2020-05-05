import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModuleModule} from './material-module/material-module.module';
import { from } from 'rxjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule,
    BrowserAnimationsModule,
   
    
  ],

  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
