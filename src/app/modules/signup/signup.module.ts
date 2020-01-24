import { SignupRoutingModule } from './signup.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule
  ]
})
export class SignupModule { }
