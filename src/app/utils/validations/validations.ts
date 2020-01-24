import { AbstractControl } from '@angular/forms';

/*
*	Validación de correo electrónico
*/
export function emailFormat(control: AbstractControl) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
  if (control && (control.value !== null || control.value !== undefined)) {
    if (!regex.test(control.value) && control.value !== '') {
      return {
        emailFormat: true
      };
    } else {
      return null;
    }
  }
}

/*
*	Validación solo números
*/
export function numberFormat(control: AbstractControl) {
  const regex = /^[0-9]*$/gm;
  if (control && (control.value !== null || control.value !== undefined)) {
    if (!regex.test(control.value) && control.value !== '') {
      return {
        emailFormat: true
      };
    } else {
      return null;
    }
  }
}

/*
*	Validación solo letras
*/
export function letterFormat(control: AbstractControl) {
  const regex = /^[a-zA-Z]*$/gm;
  if (control && (control.value !== null || control.value !== undefined)) {
    if (!regex.test(control.value) && control.value !== '') {
      return {
        emailFormat: true
      };
    } else {
      return null;
    }
  }
}
