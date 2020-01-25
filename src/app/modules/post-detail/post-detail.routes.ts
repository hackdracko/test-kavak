import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PostDetailResolverService } from './services/post-detail-resolver.service';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    resolve: {
      someKey: PostDetailResolverService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostDetailRoutingModule { }
