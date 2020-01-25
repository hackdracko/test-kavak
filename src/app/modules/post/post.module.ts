import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { PostRoutingModule } from './post.routes';
import { SharedModule } from 'src/app/shared.module';
import { PostResolverService } from './services/post-resolver.service';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ],
  providers: [
    PostResolverService
  ]
})
export class PostModule { }
