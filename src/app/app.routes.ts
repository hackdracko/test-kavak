import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {
    path: 'signup',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/signup/signup.module').then(r => r.SignupModule)
      }
    ]
  },
  /*{
    path: 'signup',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/signup/signup.module').then(r => r.SignupModule)
      }
    ]
  },*/

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        useHash: false,
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
