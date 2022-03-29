import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagePageRoutingModule } from './homepage-routing.module';

import { HomepagePage } from './homepage.page';
import { HomeNavigationComponent } from 'src/app/components/home-navigation/home-navigation.component';
import { HomePostListComponent } from 'src/app/components/home-post-list/home-post-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule,

  ],
  declarations: [HomepagePage, HomeNavigationComponent, HomePostListComponent ]
})
export class HomepagePageModule {}
