import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule, MatFormFieldModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
