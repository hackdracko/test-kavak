import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailFormat, numberFormat, letterFormat } from 'src/app/utils/validations/validations';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MatDialog } from '@angular/material';
import { ModalMessageComponent } from 'src/app/commons/modal-message/modal-message.component';
import { UsersIdbModel } from 'src/app/models/users-idb.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  public usersIdbModel: UsersIdbModel;

  constructor(
    private fb: FormBuilder,
    private dbService: NgxIndexedDBService,
    private sessionService: SessionService,
    private dialog: MatDialog,
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
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(18), letterFormat]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(18), letterFormat]],
      uuid: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(18), numberFormat]]
    });
  }

  send() {
    this.usersIdbModel = this.form.value;
    this.usersIdbModel.password = '123456';
    this.dbService.add('users', this.usersIdbModel).then(res => {
          this.showModalError('1', 'ÉXITO', 'El usuario se creo correctamente');
          const sessionObj = {
            currentUser: this.form.value
          };
          this.sessionService.setUser(sessionObj);
          this.router.navigate(['profile']);
        },
        error => {
            console.log(error);
            this.showModalError('2', 'Error', 'El usuario ya existe intenta con otro Correo electrónico');
        }
    );
  }

  login() {
    this.router.navigate(['login']);
  }

  showModalError(typeM: string, titleM: string, messageM: string) {
    const data = {
      type: typeM,
      title: titleM,
      message: messageM
    };
    this.dialog.open(
      ModalMessageComponent, {
        height: '300px',
        width: '600px',
        data
      }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get name() {
    return this.form.get('name');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get uuid() {
    return this.form.get('uuid');
  }
}
