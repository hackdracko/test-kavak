import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { PostDetailRoutingModule } from './post-detail.routes';
import { PostDetailResolverService } from './services/post-detail-resolver.service';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    SharedModule
  ],
  providers: [
    PostDetailResolverService
  ]
})
export class PostDetailModule { }
