import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Route, RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LinkComponent } from './link/link.component';

const route: Route[] = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'link',
    component: LinkComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
