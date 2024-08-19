import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';
import { ReactiveComponent } from './reactive/reactive.component';
// import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DataComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
