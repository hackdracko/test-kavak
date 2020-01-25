import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailFormat } from 'src/app/utils/validations/validations';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  legend: boolean;

  constructor(
    private fb: FormBuilder,
    private dbService: NgxIndexedDBService,
    private router: Router
  ) {
    this.legend = false;
  }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Creates form
   */
  createForm() {
    this.form = this.fb.group({
      user: ['mail@mail.com', [Validators.required, Validators.minLength(5), Validators.maxLength(50), emailFormat]],
      password: ['123456', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]]
    });
  }

  login() {
    this.dbService.openCursor('users', (evt) => {
      let flag = false;
      const cursor = (<any>evt.target).result;
      if (cursor) {
        const value = cursor.value;
        if (value.email === this.user.value) {
          flag = true;
        }
        cursor.continue();
      } else {
          console.log('Entries all displayed.');
      }
      if (flag) {
        this.goTo('post');
      } else {
        this.legend = true;
      }
    });
  }

  goTo(url) {
    this.router.navigate([url]);
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
