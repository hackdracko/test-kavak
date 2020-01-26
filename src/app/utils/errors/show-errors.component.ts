import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  template:
    `<div *ngIf="shouldShowErrors()">
       <div class="error">
          <p *ngFor="let error of listOfErrors()">
            {{error}}
          </p>
        </div>
      </div>`,
  styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent {

  errorMessages = {
    'required': () => this.messageRequired ? this.messageRequired : 'El campo es requerido',
    'minlength': (params) => this.message ? this.message : 'El número mínimo de caracteres son: ' + params.requiredLength,
    'maxlength': (params) => this.message ? this.message : 'El campo no puede tener más de  ' + params.requiredLength + ' caracteres. ',
    'pattern': (params) => this.message ? this.message : 'El campo no es válido',
    'min': (params) => this.message ? this.message : 'El número mínimo válido es ' + params.min,
    'max': (params) => this.message ? this.message : 'El número máximo válido es ' + params.max,
    'email': () => this.messageEmail ? this.messageEmail : 'Introduce un correo válido',
    'emailFormat': () => this.message ? this.message : 'Introduce un correo válido',
    'letterFormat': () => this.message ? this.message : 'Solo deben de ser letras.',
    'numberFormat': () => this.message ? this.message : 'Solo deben de ser nùmeros.'
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  @Input()
  private messageRequired: string;

  @Input()
  private messageEmail: string;

  @Input()
  private message: string;

  @Input()
  private typeCustom: string;

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && this.control.touched;
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(this.typeCustom ? this.typeCustom : field, this.control.errors[field], this.control));
  }

  private getMessage(type: string, params: any, control: any) {
    return this.errorMessages[type](params);
  }

}
