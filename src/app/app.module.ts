import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';
// import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DataComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule  // <-- Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
