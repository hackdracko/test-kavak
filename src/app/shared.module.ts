import { HeaderComponent } from './commons/header/header.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalMessageComponent } from './commons/modal-message/modal-message.component';
import { SessionService } from './services/session.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeaderComponent
  ],
  entryComponents: [
    ModalMessageComponent
  ],
  providers: [
    SessionService,
    AuthGuard
  ]
})
export class SharedModule { }
