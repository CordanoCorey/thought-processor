import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibraryModule } from '@caiu/library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
