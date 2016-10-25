import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs'

import { AppComponent } from './component/app.component';
import { HeadComponent } from './component/head/head.component';
import { ContentComponent } from './component/content/content.component';

import { IntervalPipe } from './pipe/interval.pipe'
import { routing } from './router/app.routing';
import { TopicService } from './service/topic.service';
import { StoreService } from './service/store.service';
import { ContentDetailComponent } from './component/content-detail/content-detail.component';
import { IndexComponent } from './component/index/index.component';
import { TopicComponent } from './component/topic/topic.component';
import { TopComponent } from './component/top/top.component';
import { ReplyComponent } from './component/reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContentComponent,
    ContentDetailComponent,
    IntervalPipe,
    IndexComponent,
    TopicComponent,
    TopComponent,
    ReplyComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    TopicService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
