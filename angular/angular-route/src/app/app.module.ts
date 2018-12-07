import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { CarsComponent } from './home/cars/cars.component';


const appRoutes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }, {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: 'cars/:id',
      component: CarsComponent
    }]
  }, {
    path: 'about',
    component: AboutComponent,
  }, {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
