import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { TopicComponent } from './topic/topic.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'topic/:id',
    component: TopicComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);