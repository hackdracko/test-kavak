import { BrowserModule } from '@angular/platform-browser';
import { ShowErrorsComponent } from './errors/show-errors.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    ShowErrorsComponent
  ],
  exports: [
    ShowErrorsComponent,
    BrowserModule
  ]
})
export class UtilsModule { }
