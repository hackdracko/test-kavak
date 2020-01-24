import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailFormat } from 'src/app/utils/validations/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), emailFormat]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]]
    });
  }

  login() {
    this.router.navigate(['signup']);
    console.log('TESt');
  }


  /**
   * Gets user
   */
  get user() {
    return this.form.get('user');
  }


  /**
   * Gets password
   */
  get password() {
    return this.form.get('password');
  }


}
