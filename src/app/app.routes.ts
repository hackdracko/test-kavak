import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './services/auth.guard';


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
  {
    path: 'post',
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/post/post.module').then(r => r.PostModule)
      }
    ]
  },
  {
    path: 'post-detail/:id',
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/post-detail/post-detail.module').then(r => r.PostDetailModule)
      }
    ]
  },
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
