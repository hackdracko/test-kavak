import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PostResolverService } from './services/post-resolver.service';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    resolve: {
      someKey: PostResolverService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
