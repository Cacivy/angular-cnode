import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';

import { IntervalPipe } from './interval.pipe'
import { routing } from './app.routing';
import { TopicService } from './topic.service';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { IndexComponent } from './index/index.component';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContentComponent,
    ContentDetailComponent,
    IntervalPipe,
    IndexComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
