import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePostCat1Component } from 'src/app/components/home-post-cat1/home-post-cat1.component';
import { HomePostCat2Component } from 'src/app/components/home-post-cat2/home-post-cat2.component';

import { HomepagePage } from './homepage.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagePage,
    children: [
      {
        path: 'halaman1', component: HomePostCat1Component
      },
      {
        path: 'two', component: HomePostCat2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagePageRoutingModule {}
