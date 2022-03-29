import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePostCat1Component } from 'src/app/components/home-post-cat1/home-post-cat1.component';
import { HomePostCat2Component } from 'src/app/components/home-post-cat2/home-post-cat2.component';
import { HomePostListComponent } from 'src/app/components/home-post-list/home-post-list.component';

import { HomepagePage } from './homepage.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagePage,
    children: [
      {
        path: 'halamanList/:id', component: HomePostListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagePageRoutingModule {}
