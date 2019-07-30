import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';

@NgModule({
  imports:[ 
    BrowserModule, 
    RouterModule.forRoot([
      {
        path: 'app',
        component: AppComponent,
        children: [
          { path: 'main', loadChildren: 'app/main/main.module#MainModule' },
          { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
        ]
      },
      { path: '', redirectTo: '/app/main/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/app/main/home' }
    ]),
    SharedModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
