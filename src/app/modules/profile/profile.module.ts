import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ProfileRoutingModule } from './profile.routes';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
