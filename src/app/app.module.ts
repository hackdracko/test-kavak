import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'Kavak',
  version: 1,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'email', keypath: 'email', options: { unique: true } },
      { name: 'password', keypath: 'password', options: { unique: false } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'lastname', keypath: 'lastname', options: { unique: false } },
      { name: 'phone', keypath: 'phone', options: { unique: false } },
      { name: 'uuid', keypath: 'uuid', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
