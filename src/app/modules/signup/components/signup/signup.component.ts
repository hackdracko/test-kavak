import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailFormat, numberFormat, letterFormat } from 'src/app/utils/validations/validations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Creates form
   */
  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), emailFormat]],
      phone: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18), letterFormat]],
      lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18), letterFormat]],
      id: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18), numberFormat]]
    });
  }

}
