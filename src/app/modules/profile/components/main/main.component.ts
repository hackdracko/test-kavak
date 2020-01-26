import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersIdbModel } from 'src/app/models/users-idb.model';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ModalMessageComponent } from 'src/app/commons/modal-message/modal-message.component';
import { emailFormat, letterFormat, numberFormat } from 'src/app/utils/validations/validations';
import { SessionService } from 'src/app/services/session.service';
declare var jsUniqueEmails: any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  form: FormGroup;
  public usersIdbModel: UsersIdbModel;
  private currentUser: any;

  constructor(
    private fb: FormBuilder,
    private dbService: NgxIndexedDBService,
    private sessionService: SessionService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.currentUser = this.sessionService.getUser();
  }

  ngOnInit() {
    this.createForm();
    this.checkPreviousForm();
  }

  /**
   * Creates form
   */
  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), emailFormat]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(18), letterFormat]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(18), letterFormat]],
      uuid: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(18), numberFormat]]
    });
  }

  checkPreviousForm() {
    if (this.currentUser) {
      this.fillForm(this.currentUser.currentUser);
    }
  }

  fillForm(dataForm) {
    Object.entries(dataForm).forEach(
      ([key, value]) => {
        if (key !== 'id') {
          this.form.get(key).setValue(value);
        }
      }
    );
  }

  send() {
    this.usersIdbModel = this.form.value;
    this.usersIdbModel.id = this.currentUser.currentUser.id;
    this.dbService.update('users', this.usersIdbModel).then(res => {
          this.showModalError('1', 'ÉXITO', 'El usuario se edito correctamente');
        },
        error => {
            console.log(error);
            this.showModalError('2', 'Error', 'Ocurrio un error al editar');
        }
    );
  }

  goTo() {
    this.router.navigate(['post']);
  }

  sendEmails() {
    var emails = [
      'test.email+alex@kavak.com',
      'test.e.mail+bob.cathy@kavak.com',
      'test.email+alex@ka.vak.com'
    ];
    var emailsReplaced = [];
    for(var i = 0; i < emails.length; i++) {
      var mail = emails[i];
      var splitAt = mail.split('@');
      var username = splitAt[0];
      var domain = splitAt[1];
      var originalMail = '';
      if (username.includes('+')) {
        var checkPlus  = username.split('+');
        originalMail = checkPlus[0];
      }
      if (username.includes('.')) {
        originalMail  = (originalMail) ? originalMail.replace(/\./gi, '') : username.replace(/\./gi, '') ;
      }
      emailsReplaced.push(originalMail + '@' + domain);
    }
    var uniquesEmail = emailsReplaced.filter( this.onlyUnique );
    this.showModalError('1', 'Aviso', 'Se enviara email a los siguentes correos: \n' + uniquesEmail);
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
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

  get password() {
    return this.form.get('password');
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
