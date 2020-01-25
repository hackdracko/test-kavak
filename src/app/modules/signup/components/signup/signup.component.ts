import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailFormat, numberFormat, letterFormat } from 'src/app/utils/validations/validations';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MatDialog } from '@angular/material';
import { ModalMessageComponent } from 'src/app/commons/modal-message/modal-message.component';
import { UsersIdbModel } from 'src/app/models/users-idb.model';

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
      email: ['mail@mail.com', [Validators.required, Validators.minLength(5), Validators.maxLength(50), emailFormat]],
      phone: ['323232', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]],
      name: ['names', [Validators.required, Validators.minLength(5), Validators.maxLength(18), letterFormat]],
      lastName: ['lastname', [Validators.required, Validators.minLength(5), Validators.maxLength(18), letterFormat]],
      uuid: ['2323322', [Validators.required, Validators.minLength(5), Validators.maxLength(18), numberFormat]]
    });
  }

  send() {
    this.usersIdbModel = this.form.value;
    this.usersIdbModel.password = '123456';
    this.dbService.add('users', this.usersIdbModel).then(res => {
          this.showModalError('1', 'ÉXITO', 'El usuario se creo correctamente');
        },
        error => {
            console.log(error);
            this.showModalError('2', 'Error', 'El usuario ya existe intenta con otro Correo electrónico');
        }
    );
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
}
